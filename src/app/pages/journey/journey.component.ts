import { Component } from '@angular/core';
import { TrainService } from 'src/app/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {
  station:any
  constructor(private trains: TrainService) {}
  ngOnInit(){
    this.station = this.trains.getData2()
}
}
