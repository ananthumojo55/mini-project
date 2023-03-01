import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from 'src/app/train.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private train : TrainService, private router: Router){}
  database=this.train.getData();
}
