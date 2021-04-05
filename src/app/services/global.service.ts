import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private cookieService: CookieService
  ) { }

  apiHost = 'http://localhost:8000/api/';
  httpHeaders = {'Content-Type': 'application/json'};
  user:string

  headers() {
    const token = this.getToken();
    if (token !== '') {
      this.httpHeaders['Authorization'] = 'Token ' + token;
    }
    return new HttpHeaders(this.httpHeaders);
  }
  /////////
  setToken(token: string) {
    this.cookieService.set('ATN', token);
  }
  isAuthenticated() {
    const token = this.getToken();
    return token === '' ? false : true;
  }
  getToken() {
    return this.cookieService.get('ATN');
  }

 ///////////
  setProfile(user: string){
    this.cookieService.set('name',user)
  }

  getProfile(){
    return this.cookieService.get('name')
  }


}