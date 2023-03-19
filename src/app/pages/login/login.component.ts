import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  psw:string=""
  constructor(private router: Router, private fs:FireService){ }

  signin(){
    if(this.email===""){
      alert("Please enter your email")
      return}
    else if(this.psw===""){
      alert("Please enter your password")
      return}
    this.fs.login(this.email,this.psw)
    this.email=""
    this.psw=""
  }
}
