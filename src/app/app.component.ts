import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container-fluid m-0 p-0 w-100">
  <div class="phoneDesignCont d-flex justify-content-center align-items-center" style="height:100vh">
      <div class="phone bg-dark rounded-5 d-flex justify-content-center align-items-center" style="height: 600px; width: 320px;">
          <div class="bg-dark phonescreen" [style.opacity]="onAndOff ? 0 : 1 " style="width: 310px; height: 590px; border-radius: 30px;">
              <div class="screen" style="width: 310px; height: 590px; border-radius: 30px;position: absolute">
                <div class="bg" style="border-radius:30px">
                <app-topbar></app-topbar>
                <div style="height:520px;">
                <router-outlet></router-outlet>
                </div>
                <app-bottombar></app-bottombar>
                </div>
              </div>
          </div>
      </div>
      <div>
          <button (click)="onAndOffBtn()" class="rounded bg-dark border border-0" style="width:3px;height:6rem; position: relative;top:-120px;outline: none;"></button>
      </div>
  </div>
  </div>`,
  styles: [`
  .screen{
    background-image: url('../assets/images/sol.png');
    background-size: contain;
}
    .bg{
      background-color: rgba($color: #fff, $alpha: 0.1);
    }
  `]
})
export class AppComponent {
  title = 'phonebookappfrontend';
   onAndOff = true;

   onAndOffBtn():boolean{
    return this.onAndOff = !this.onAndOff
   }
}
