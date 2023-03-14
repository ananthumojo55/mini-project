import { Component } from '@angular/core';
import { TrainService } from 'src/app/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrls: ['./trainlist.component.css']
})
export class TrainlistComponent {
  constructor(private train : TrainService, private router: Router){}
  trainlist=this.train.getData3();
}
