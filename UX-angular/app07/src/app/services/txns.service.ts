import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Txn } from '../shared/txn';

@Injectable({
  providedIn: 'root'
})
export class TxnsService {
  apiUrl:string;

  constructor(private httpClient : HttpClient) {
    this.apiUrl="http://localhost:9999/txns";
  }

  getAllByAhId(ahId:number):Observable<Txn[]>{
    return this.httpClient.get<Txn[]>(`${this.apiUrl}?ahId=${ahId}`);
  }

  getById(id:number):Observable<Txn> {
    return this.httpClient.get<Txn>(`${this.apiUrl}/${id}`);
  }

  add(txn:Txn):Observable<Txn> {
    return this.httpClient.post<Txn>(this.apiUrl,txn);
  }

  update(txn:Txn):Observable<Txn> {
    return this.httpClient.put<Txn>(`${this.apiUrl}/${txn.id}`,txn);
  }

  deleteById(id:number):Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
