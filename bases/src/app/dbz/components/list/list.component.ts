import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainPageComponent } from '../../pages/main-page.component';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }
}
