import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../pages/main-page.component';
import { ListComponent } from './list/list.component';
//  If the module was already imported on another place, it gets stored in memory,
//  so it shouldn't affect how the program runs because it uses the one already
//  there.



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
  ]
})
export class DbzModule { }
