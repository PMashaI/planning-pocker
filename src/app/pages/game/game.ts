import { Component } from '@angular/core';

@Component({
  selector: 'start-game',
  templateUrl: './game.html',
  styleUrls: ['./game.css']
})
export class GameComponent {
  title = 'Choose options';
  gameForm: GameFormInterface;

  numberTypeDictionary = [
    {
      name: 'Fibonnachi',
      id: 1
    },
    {
      name: 'Degree of 2',
      id: 2
    }
  ];

  constructor() {
    this.gameForm = {
      numberType: 0,
      title: 'Please select the number type for your game'
    };
  }

  public onSelect(typeId: 0 | 1 | 2) {
    this.gameForm.numberType = typeId;
  }
}
