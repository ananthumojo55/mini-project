import { Injectable } from '@angular/core';
import { database,gallery,gallery1,stations,trainlist,trains } from 'src/assets/data/data1';
@Injectable({
  providedIn: 'root'
})
export class TrainService {

  getData(){
    return database
  }
  getData1(){
    return trains
  }
  getData2(){
    return stations
  }
  getData3(){
    return trainlist
  }
  getData4(){
    return gallery
  }
  getData5(){
    return gallery1
  }
}
