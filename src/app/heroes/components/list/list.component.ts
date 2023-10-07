import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesNames: string[] =
    [
      "Superman",
      "Batman",
      "Wonder",
      "Iron Man",
      "Spiderman",
      "Ant Man",
      "Hauk Eye",
      "Hulk",
      "Thor",
      "Black Widow",
      "Black Pather"
    ];

  public deletedHero?: string = ''

  removeLastHero(): void {
    this.deletedHero = this.heroesNames.pop();
  }
}
