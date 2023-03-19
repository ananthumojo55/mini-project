import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';
import { TrainService } from 'src/app/train.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  email:string=""
  psw:string=""
  constructor(private train : TrainService, private router: Router, private fs:FireService){ }
  database=this.train.getData();
  gotoHere(id:string){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }
  
}

