import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service'
@Component({
  selector: 'app-add-caracter-form',
  templateUrl: './add-caracter-form.component.html',
  styleUrls: ['./add-caracter-form.component.css']
})
export class AddCaracterFormComponent implements OnInit {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    if (this.character.name === '') return;
    this.onNewCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
