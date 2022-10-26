import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
time:string
  constructor() { 
    this.time = "00:00:00"
    setInterval(() => {
     this.time =  new Date().toLocaleTimeString()
     }, 1000);
  }

  ngOnInit(): void {
  }

}
