import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number>{
    return new Observable<number>(observer => {
      if(lb>ub){
        observer.error("Invalid boundaries");
        return;
      }

      let current = lb;
      let handle = setInterval(()=>{
        observer.next(current);
        current++;
        if(current>ub){
          clearInterval(handle);
          observer.complete();
        }
      },500);
    });
  }
}
