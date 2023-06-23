import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  constructor(public service: GameService){
    
  }
}
