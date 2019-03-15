import { SliderComponent } from './../slider/slider.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: {
    background : 'test.jpg'
  };
  constructor() { }
 
 
  ngOnInit() {
       
  }

}
