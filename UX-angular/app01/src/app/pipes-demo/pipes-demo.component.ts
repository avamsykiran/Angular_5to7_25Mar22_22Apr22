import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  str:string;
  dt:Date;
  num:number;

  constructor() { 
    this.str="Hello world";
    this.num=1234.1234;
    this.dt=new Date();
  }


}
