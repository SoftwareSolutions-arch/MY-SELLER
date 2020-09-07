import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss'],
})
export class ViewDetailComponent implements OnInit {
  quantity: number = 5;
  constructor(public modelCtrl: ModalController) { }

  ngOnInit() { }


  plusQuantity() {
    if (this.quantity > 30) {
      this.quantity + 10;
    }
    else if (this.quantity < 30 || this.quantity == 30) {
      this.quantity + 5;
    }
    if (this.quantity < 10) {
      this.quantity + 1;
    }
  }

  minusQuantity() {
    if (this.quantity > 30) {
      this.quantity - 10;
    }
    else if (this.quantity < 30 || this.quantity == 30) {
      this.quantity - 5;
    }
    if (this.quantity < 10) {
      this.quantity - 1;
    }
  }
  dismissModal() {
    this.modelCtrl.dismiss();
  }


}
