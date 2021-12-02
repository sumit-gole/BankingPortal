import { bank } from './../../models/bank';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  
  private url = "https://run.mocky.io/v3/65471b71-a636-4bde-abe6-f003a607e42c";
  
  constructor(private http: HttpClient) { }
  
  getData() {
    console.log("testing..", this.http.get<bank[]>(this.url));
    return this.http.get<bank[]>(this.url);
  }

}
