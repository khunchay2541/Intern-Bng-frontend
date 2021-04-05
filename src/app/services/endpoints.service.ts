import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(
      private globalService: GlobalService
  ) { }

  login() {
    return this.globalService.apiHost + 'auth/login/';
  }

  register() {
    return this.globalService.apiHost + 'auth/register/';
  }

  page() {
    return this.globalService.apiHost + 'page/';
  }


}