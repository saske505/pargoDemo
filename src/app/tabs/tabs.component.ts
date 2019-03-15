import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabContent = [{
    name: `I'm a business`,
    page: {
      head: {
        grid: '1',
        h1: 'SOUTH AFRICA’S UNIQUE URBAN AND RURAL INFRASTRUCTURE DEMAND FOR INNOVATIVE DELIVERY METHODS',
        p: 'Security estates are unable to accept parcels for residents, universities are inadequately equipped to accept deliveries for students, employees of big corporates are not permitted to receive parcels at the office, some customers are struggling to provide a delivery address. Post offices have inconvenient opening hours. Recognising this need, Pargo was born.'
      },
      services: [
        {
          name: 'CLICK AND COLLECT',
          content: 'The Pargo Click and Collect delivery option integrates with your check out page and is fully managed by Pargo. Click and Collect optimises “first time delivery rates',
          bgColor: 'rgb(27, 117, 188)',
          img: '../assets/screen_1.png',
          link: '/track'
        }, {
          name: 'OMNICHANNEL',
          content: 'The Pargo Click and Collect delivery option integrates with your check out page and is fully managed by Pargo. Click and Collect optimises “first time delivery rates',
          bgColor: 'rgb(255, 242, 0)',
          img: './assets/box_3_brand.png',
          link: '/track'
        }, {
          name: 'PICKUP POINTS',
          content: 'The Pargo Click and Collect delivery option integrates with your check out page and is fully managed by Pargo. Click and Collect optimises “first time delivery rates',
          bgColor: 'rgb(27, 117, 188)',
          img: './assets/pargo_collection.png', 
          link: '/track'
        }

      ]
    }
  },
  {
    name: `I'm a shopper`,
    page: {
      head: {
        grid: '1',
        h1: 'NEVER MISS A DELIVERY AGAIN!',
        p: 'Shop online and collect from a Pargo Point when it suits you best',
        bgColor: 'rgb(27, 117, 188)',
        link: '/track'
      },
      services: [
        {
          name: 'CLICK AND COLLECT',
          content: 'The Pargo Click and Collect delivery option integrates with your check out page and is fully managed by Pargo. Click and Collect optimises “first time delivery rates',
          bgColor: 'rgb(255, 242, 0)',
          img: './assets/pargo_collection.png', 
          link: '/track'
        }
      ]
    }
  }]
  constructor() { }

  ngOnInit() {
  }

}
