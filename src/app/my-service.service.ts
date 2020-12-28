import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  serviceProperty = "Service Created";
  private finalData = [];
  private apiUrl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  showTodayDate() {
    let date = new Date();
    return date;
  }
  getData() {
    return this.http.get(this.apiUrl);
  }

  private apiurl2 = "https://jsonplaceholder.typicode.com/photos";
  getData2() {
        return this.http.get(this.apiurl2);
     }


}
