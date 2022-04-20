import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inWords'
})
export class InWordsPipe implements PipeTransform {

  digits : string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO",
      "THREE","FOUR","FIVE",
      "SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): string {
    let valAsString : string = `${value}`; //converting number to string
    let s:string="";

    for(let i=0;i<valAsString.length;i++){
      let ch : string = valAsString.charAt(i);

      if(ch==='.'){
        s += " dot ";
      }else{
        let d :number = parseInt(ch);
        s += " "+this.digits[d]+" ";
      }
    }
    return s;
  }

}
