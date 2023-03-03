import { Component } from '@angular/core';
import  { Router  } from '@angular/router';
import { TrainService } from 'src/app/train.service';
@Component({
  selector: 'app-premiumtrains',
  templateUrl: './premiumtrains.component.html',
  styleUrls: ['./premiumtrains.component.css']
})
export class PremiumtrainsComponent {
  constructor(private train : TrainService, private router: Router){}
  trains=this.train.getData1();
}
