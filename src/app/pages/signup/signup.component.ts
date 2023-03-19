import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 email:string=""
 psw:string=""
repeat:string=""
constructor(private fs:FireService){}
signup(){
  console.log(this.email,this.psw,this.repeat)
  if(this.email===""){
    alert("Please enter your email")
    return
  }
  else if(this.psw===""){
    alert("Please enter your password")
    return
  }
  else if(this.repeat===""){
    alert("Please re-enter  password")
    return
  }
  else if(this.psw!==this.repeat){
    alert("Passwords do not match... Please enter your password again!")
    return
  }
  this.fs.signup(this.email,this.psw)
  this.email=""
  this.psw=""
  this.repeat=""
}
}
