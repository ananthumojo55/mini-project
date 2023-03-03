import { Component } from '@angular/core';
import { TrainService } from 'src/app/train.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private train: TrainService){}
  ngOnInit():void{
    let id=localStorage.getItem('id')
    let singleDataArray=this.train.getData()
    console.log(singleDataArray);
    this.single=singleDataArray.filter(e=>e.title===id)
    console.log(this.single)
  
  }
}
