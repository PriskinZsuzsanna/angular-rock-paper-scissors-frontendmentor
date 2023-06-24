import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  scorePlayer: number = 0;
  scoreComputer: number = 0;
  picked: string = "";
  housePick: string = "";
  result: string = "";

  isRules: boolean = false;
  isFadeOut: boolean = false;
  isPicking: boolean = true;
  isResults: boolean = false;

  constructor() { }

  toggleRules(){
    this.isFadeOut = false

    if(this.isRules == false){
      this.isRules = true
    } else 
    if(this.isRules == true){
      this.isFadeOut = true
      setTimeout(() => {
        this.isRules = false
      },250)
    }
  }

  pickOne(picked: string){
    this.isPicking = false;
    this.isResults = true;
    this.picked = picked

    setTimeout(() => {
      this.getHousePick(0, 2)
    }, 1000)

    setTimeout(() => {
      this.getResult()
    }, 2000)
  }

  getHousePick(min: number, max:number){
      let index = Math.floor(Math.random() * (max-min + 1)) + min;
      if(index == 0){
        this.housePick = 'rock'
      } else if (index == 1){
        this.housePick = 'paper'
      } else if (index == 2) {
        this.housePick = 'scissors'
      }
  }

  getResult() {
    

    if(this.housePick ===  this.picked){
      this.result = "Drow";
      this.scoreComputer += 1
      this.scorePlayer += 1

    } else if (this.housePick ===  'rock' && this.picked === "paper" || this.housePick === 'paper' && this.picked === "rock" ||  this.housePick === 'scissors' && this.picked === "rock") {
      this.result = "You Win!"
      this.scorePlayer += 1

    } else if(this.housePick ===  'rock' && this.picked === "scissors" || this.housePick === 'paper' && this.picked === "scissors" ||  this.housePick === 'scissors' && this.picked === "paper"){
      this.result = "You Lose!"
      this.scoreComputer += 1
    }
    
  }

  playAgain(){
    this.picked = "";
    this.housePick = "";
    this.result = "";
    this.isPicking = true;
    this.isResults = false;
  }

}
