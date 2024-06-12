import {  Component, OnInit  } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Level } from '../model/level.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tooltipVisible: boolean = false;
  lastBestScore: number | undefined;
  levels: Level[] = [];

  constructor(
    private platform: Platform,
    private alertController: AlertController

  ) {}

  ngOnInit() {
    this.loadScripts();
    const storedBestScore = localStorage.getItem('bestScore');
    this.lastBestScore = storedBestScore !== null ? parseInt(storedBestScore, 10) : 0;
  
    console.log('Last Best Score:', this.lastBestScore);
  }

  toggleTooltip() {
      this.tooltipVisible = !this.tooltipVisible;
   
  }
  
  
  
  hideTooltip() {
    this.tooltipVisible = false;
  }
  


  getFormattedScore(): string | number {
    const score = this.lastBestScore;
  
    if (score !== undefined && !isNaN(score)) {
      return score;
    } else {
      return 0;
    }
  }
  

  public exitApp() {
    if (this.platform.is('capacitor')) {
      if (App && App.exitApp) {
        App.exitApp();
      }
    } else {
      // Provide an alternative action for non-Capacitor environments
      this.withAlert('Do you want to exit the app?', () => {
        const nav: Navigator & { app?: { exitApp?: () => void } } = navigator;
  
        if (nav && ('app' in nav) && nav.app && nav.app.exitApp) {
          nav.app.exitApp();
        } else if (typeof window !== 'undefined' && window.close) {
          // Close the browser window/tab as a fallback
          window.close();
        }
      });
    }
  }
  
   async withAlert(message: string, action: () => void) {
    const alert = await this.alertController.create({
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: action,
        },
      ],
    });

    await alert.present();
  }
  
  private loadScripts() {
    const scripts = [
      'assets/js/bind_polyfill.js',
      'assets/js/classlist_polyfill.js',
      'assets/js/animframe_polyfill.js',
      'assets/js/keyboard_input_manager.js',
      'assets/js/html_actuator.js',
      'assets/js/grid.js',
      'assets/js/tile.js',
      'assets/js/local_storage_manager.js',
      'assets/js/game_manager.js',
      'assets/js/application.js',
    ];

    scripts.forEach(script => {
      const scriptElement = document.createElement('script');
      scriptElement.src = script;
      document.body.appendChild(scriptElement);
    });

   
  }
}
