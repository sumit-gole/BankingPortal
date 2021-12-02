import { bank } from './../../models/bank';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from './../../models/baseUrl';
@Injectable({
  providedIn: 'root'
})
export class BankService {
  
  constructor(private http: HttpClient) { }
  
  getData() {
    console.log("testing..", this.http.get<bank[]>(baseUrl));
    return this.http.get<bank[]>(baseUrl);
  }

}
