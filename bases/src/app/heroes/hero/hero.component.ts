import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
  return `${this.name} - ${this.age}`;
  }
  changeHero():void {
    this.name = "spiderman";
  }
  changeAge():void {
    this.age = 25;
  }
  resetForm():void {
    this.name = "ironman";
    this.age = 45;
    // document.querySelectorAll("h1")!.forEach(element => {
    //   element!.innerHTML = "<h1>Angular</h1>";
    // });
  }
}
