import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-today-price',
  templateUrl: './today-price.page.html',
  styleUrls: ['./today-price.page.scss'],
})
export class TodayPricePage implements OnInit {

  constructor(public storage:Storage) {
    this.storage.get('userData').then(data => {
      console.log('data',data);
      if (data) {
        // this.rootPage = 'MenuPage';
      } else {
        // this.rootPage = 'LoginPage'
      }
    });
   }

  ngOnInit() {

  }
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2.5,
    spaceBetween: 5,
  }
}
