import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from 'src/app/train.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private train : TrainService, private router: Router){}
  database=this.train.getData();
  gotoHere(id:string){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }
}

