import { Injectable } from '@angular/core';
import { database } from 'src/assets/data/data1';
@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor() { }
  getData(){
    return database
  }
}
