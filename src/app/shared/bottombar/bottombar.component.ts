import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {
  constructor(
    private router: Router,
    private location:Location
  ) { }

  ngOnInit(): void {}

eventA(){
  return
}
eventB(){
    this.router.navigate(["/"])
}
eventC(){ 
  if (location.pathname =='') {
    return
  }
  else this.location.back()
}
}
