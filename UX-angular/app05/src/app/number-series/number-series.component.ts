import { Component } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent  {

  lb:number;
  ub:number;

  errMsg!:string;
  results!:number[];

  isComplete:boolean;

  constructor(private nss:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.isComplete=true;
  }

  generate(){
    this.isComplete=false;
    this.results=[];

    let ob = this.nss.generateSeries(this.lb,this.ub);

    ob.subscribe(
      val => this.results.push(val),
      err => {this.errMsg=err; this.isComplete=true},
      () => this.isComplete=true
    );
  }
}
