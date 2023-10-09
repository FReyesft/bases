import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-caracter-form',
  templateUrl: './add-caracter-form.component.html',
  styleUrls: ['./add-caracter-form.component.css']
})
export class AddCaracterFormComponent implements OnInit {

  public character: Character = {
    name: '',
    power: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
