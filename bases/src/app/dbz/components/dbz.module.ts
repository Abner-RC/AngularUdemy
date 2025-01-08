import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../pages/main-page.component';
//  If the module was already imported on another place, it gets stored in memory,
//  so it shouldn't affect how the program runs because it uses the one already
//  there.



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
