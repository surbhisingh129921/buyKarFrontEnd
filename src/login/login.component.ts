import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  constructor(
    private router:Router,
    private basicAuthenticationService: BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }


   
  HandleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username ,this.password ).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
      },
      error =>{
       console.log(error)
       this.invalidLogin = true
      }
    )
     
  }

}
