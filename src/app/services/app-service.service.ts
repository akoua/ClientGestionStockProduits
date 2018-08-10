import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../config/api.url';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppServiceService {

  authenticated:boolean = false;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authenticate(credentials, callback){
    if (credentials) {
      
      const token = btoa(credentials.username+ ":" +credentials.password);
      this.cookieService.set('token',token);
      const headers = new HttpHeaders({
        authorization:'Basic'+token
      }
    );
      //headers.append('Content-Type', 'application/json');      
      this.http.get(API_URL.USER_URL,{headers:headers}).subscribe(response=>{        
        if (response && response['name']) {          
          this.authenticated = true;
        }else{
          this.authenticated = false;
        }
        return callback && callback();
      });
     
    }
   
  }
}
