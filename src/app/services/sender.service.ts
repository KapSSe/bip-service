import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  constructor(private http: HttpClient) { 
  }

  sendUserData(data) {
    this.http.post("https://www.bip-service.com.ua/api/sender", data, {responseType: 'text'}).subscribe((res) => res);
  }

}
