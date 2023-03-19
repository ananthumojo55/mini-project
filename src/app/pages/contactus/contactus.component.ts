import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
name:string =""
email:string =""
subject:string =""
phone:string =""
message:string =""
constructor(private fs:FireService){}
send(){
  let data={
    name:this.name,
    email:this.email,
    subject:this.subject,
    phone:this.phone,
    msg:this.message
  }
  this.fs.contact(data)
}
}
