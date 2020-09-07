import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {

  constructor(public modelCtrl: ModalController) { }

  ngOnInit() { }

  dismissModal() {
    this.modelCtrl.dismiss();
  }
}
