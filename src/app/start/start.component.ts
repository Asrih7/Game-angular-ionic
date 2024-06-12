import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent  implements OnInit {

  constructor() { }

  isLoading = true;

  ngOnInit() {
    this.load();
  }
  
  load(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  
  start(): void {
    alert('test')
  }
  
}
