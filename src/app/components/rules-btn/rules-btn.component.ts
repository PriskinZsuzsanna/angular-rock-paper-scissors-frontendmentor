import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-rules-btn',
  templateUrl: './rules-btn.component.html',
  styleUrls: ['./rules-btn.component.scss']
})
export class RulesBtnComponent {

  constructor(public service: GameService){
    
  }

}
