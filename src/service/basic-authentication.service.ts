import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from 'src/app.constant';


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient
  ) { }


  executeJWTAuthenticationService(username, password){
   
    return this.http.post<any>(`${API_URL}/authenticate`,
    {username,
    password}).pipe(
      map(
      data => {
        sessionStorage.setItem(AUTHENTICATED_USER,username);
        sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
        console.log("execute hellow world bean");
        return data;
      }
      )
    );
 
  } 


  isAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
   
   }

   getAuthenticatedToken(){
     if(this.isAuthenticatedUser())
    return  sessionStorage.getItem(TOKEN);
   
   }

  isUserLoggedIn(){
   let user= sessionStorage.getItem(AUTHENTICATED_USER);
   return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public message:String){}
}