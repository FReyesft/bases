import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  get heroDescripcion(): string {
    return `${this.name} - ${this.age} años`

  }

  changeName(): void {
    this.name = 'Spider Man'
  }

  changeAge(): void {
    this.age = 30
  }

  resetForm() {
    this.name = 'Iron Man'
    this.age = 45
  }
}
