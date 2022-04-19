import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  userName:string;
  logo:string;
  logos:string[];
  logoIndex:number;
  logoWidth:number;

  bFlag:boolean;
  cFlag:boolean;
  rFlag:boolean;

  constructor() { 
    this.userName="Somebody";

    this.logos=[
      "assets/imgs/w1.jpg",
      "assets/imgs/w2.png",
      "assets/imgs/w3.jpg"];
    this.logoIndex=0;
    this.logo=this.logos[this.logoIndex];

    this.logoWidth=100;

    this.cFlag=false;
    this.bFlag=true;
    this.rFlag=true;
  }

  changeLogo(){
    this.logoIndex++;
    if(this.logoIndex==this.logos.length){
      this.logoIndex=0;
    }
    this.logo=this.logos[this.logoIndex];
  }

}
