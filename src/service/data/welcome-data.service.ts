import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:String){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }


  executeHelloWorldBean(){
    return this.http.get<HelloWorldBean>('http://localhost:8454/HelloWorld');
    console.log("execute hellow world bean");
  }

  executeHelloWorldBeanWithPathVariable(name){

    return this.http.get<HelloWorldBean>(`http://localhost:8454/hello-world/path-variable/${name}`
    );
    //console.log("execute hellow world bean");
  } 

}
