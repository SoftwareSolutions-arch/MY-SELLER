import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 url='http://ecommerce2.tjcg.in/api/v1/'
  constructor(public http: HttpClient) { }


  login(data: any) {
    return this.http.post(this.url + 'login', data);
  }

  logout(data: any) {
    return this.http.post(this.url + 'logout', data);
  }


  forget_password(data: any) {
    return this.http.post(this.url + 'resetpassword', data);
  }
}
