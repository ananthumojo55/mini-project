import { Injectable } from '@angular/core';
import { database } from 'src/assets/data/data1';
import { trains } from 'src/assets/data/data2';
@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor() { }
  getData(){
    return database
  }
  constructor1() { }
  getData1(){
    return trains
  }
}
