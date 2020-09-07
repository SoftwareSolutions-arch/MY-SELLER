import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewDetailComponent } from 'src/app/component/view-detail/view-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(public modelCtrl: ModalController) { }

  ngOnInit() {
  }

  async viewDetail() {
    let editProfileModal = await this.modelCtrl.create({
      component: ViewDetailComponent,
      cssClass: 'view-detail-modal'
    });
    await editProfileModal.present();
    editProfileModal.onWillDismiss().then(data => {
      this.ngOnInit();
    });
  }

}
