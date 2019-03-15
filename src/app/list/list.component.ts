import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
export interface Section {
  trackingNumber: string;
  updated: Date;
  arrival: string;
  progress: object;
  status : string;
  moreInfo: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 
  randomValue() {
    return Math.floor(Math.random() * 100) + 1
  }
  randomDay() {
    return Math.floor(Math.random() * 7) + 1
  }
  randomTrackingNumber() {
    return Math.random().toString(36).substr(2, 9);
  }
  randomStatus() {
    let status = ['Shipped', 'loaded for delivery', 'in transit', 'overnight courier'];
    return status[Math.floor(Math.random() * status.length)];
  }
  generateFolders() {
    for(let i = 0; i < 15; i++) {
      this.folders.push(
        {
          trackingNumber:  `Tracking number : ${this.randomTrackingNumber()}`,
          updated: new Date(),
          arrival: `${this.randomDay()} Day's Remaining`,
          progress: {
            color: 'primary',
            mode: 'determinate',
            value: this.randomValue()
          },
          moreInfo: false,
          status : this.randomStatus()
        }
      )
    }
  }
  
  folders: Section[] = [
    
  ];

  constructor(private bottomSheet: MatBottomSheet) { }
  openBottomSheet(data) {
    let sheet = this.bottomSheet.open(BottomSheetComponent, {
      data : data
    })
  }
  ngOnInit() {
    this.generateFolders()
  }

}
