import { Component } from '@angular/core';
import { TrainService } from 'src/app/train.service';
@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent {
  station:any
  constructor(private trains: TrainService) {}
  ngOnInit(){
    this.station = this.trains.getData2()
  }
}
