import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountHolder } from '../shared/account-holder';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {
  apiUrl:string;

  constructor(private httpClient : HttpClient) {
    this.apiUrl="http://localhost:9999/ahs";
  }

  getAll():Observable<AccountHolder[]> {
    return this.httpClient.get<AccountHolder[]>(this.apiUrl);
  }

  getById(id:number):Observable<AccountHolder> {
    return this.httpClient.get<AccountHolder>(`${this.apiUrl}/${id}`);
  }

  add(ah:AccountHolder):Observable<AccountHolder> {
    return this.httpClient.post<AccountHolder>(this.apiUrl,ah);
  }

  update(ah:AccountHolder):Observable<AccountHolder> {
    return this.httpClient.put<AccountHolder>(`${this.apiUrl}/${ah.id}`,ah);
  }

  deleteById(id:number):Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
