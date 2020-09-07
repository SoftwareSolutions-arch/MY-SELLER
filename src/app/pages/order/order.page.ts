import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderDetailComponent } from 'src/app/component/order-detail/order-detail.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(public modelCtrl: ModalController) { }

  ngOnInit() {
  }

  async viewOrderDetail() {
    let orderDetailModal = await this.modelCtrl.create({
      component: OrderDetailComponent,
      cssClass: 'order-detail-modal'
    });
    await orderDetailModal.present();
    orderDetailModal.onWillDismiss().then(data => {
      this.ngOnInit();
    });
  }

}
