import { Component } from '@angular/core';

@Component({
  selector: 'app-struc-dire-demo',
  templateUrl: './struc-dire-demo.component.html',
  styleUrls: ['./struc-dire-demo.component.css']
})
export class StrucDireDemoComponent  {

  friends!:string[];
  friend!:string;

  constructor() {

  }

  addFriend(){
    if(!this.friends){
      this.friends=[];
    }

    this.friends.push(this.friend);
    this.friend="";
  }
}
