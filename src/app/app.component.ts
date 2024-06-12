import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Your other initialization code

      // Show the splash screen
      if (typeof navigator !== 'undefined' && 'splashscreen' in navigator) {
        (navigator as any).splashscreen.show();
      } else {
        SplashScreen.show(); // Use SplashScreen directly without injecting
      }

      // Simulate a delay (adjust the time as needed)
      setTimeout(() => {
        // Hide the splash screen manually after the delay
        if (typeof navigator !== 'undefined' && 'splashscreen' in navigator) {
          (navigator as any).splashscreen.hide();
        } else {
          SplashScreen.hide(); // Use SplashScreen directly without injecting
        }
      }, 3000); // Adjust the delay time (in milliseconds) as needed
    });
  }
}
