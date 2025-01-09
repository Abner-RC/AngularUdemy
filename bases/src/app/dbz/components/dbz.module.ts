import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { FormsModule } from '@angular/forms';
//  If the module was already imported on another place, it gets stored in memory,
//  so it shouldn't affect how the program runs because it uses the one already
//  there.



@NgModule({
  declarations: [
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    AddCharacterComponent,
  ]
})
export class DbzModule { }
