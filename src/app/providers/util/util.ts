import { Injectable } from '@angular/core';
import { LoadingController, ToastController, ModalController, AlertController, Platform } from '@ionic/angular';

@Injectable()

export class UtilProvider {
    constructor(private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController,
        public modalController: ModalController,
        public platform: Platform
    ) {
    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            spinner: 'bubbles',
            message: 'Please Wait...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
            backdropDismiss: true
        });
        await loading.present();

    }

    async dismissLoading() {
        if (this.loadingCtrl) {
            this.loadingCtrl.dismiss();
        }
    }

    async presentToast(message) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present()
    }
}
