import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-pick',
  templateUrl: './pick.component.html',
  styleUrls: ['./pick.component.scss']
})
export class PickComponent {
  paper: string = "paper"
  scissors: string = "scissors"
  rock: string = "rock"

  constructor(public service: GameService){

  }

}
