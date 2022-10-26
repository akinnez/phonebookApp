import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';



@NgModule({
  declarations: [TopbarComponent,BottombarComponent],
  imports: [
    CommonModule
  ],
  exports:[TopbarComponent,BottombarComponent]
})
export class SharedModule { }
