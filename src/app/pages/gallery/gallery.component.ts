import { Component } from '@angular/core';
import { TrainService } from 'src/app/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(private train : TrainService, private router: Router){}
  gallery=this.train.getData4();
  gallery1=this.train.getData5();
}

