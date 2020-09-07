import { Component } from '@angular/core';
import { UtilProvider } from './providers/util/util';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userInfo: any = '';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController, public storage: Storage, public router: Router, public util: UtilProvider,
    public user: UserService
  ) {
    this.initializeApp();
    this.storage.get('userData').then(data => {
      if (data) {
        this.userInfo = data;
        this.router.navigate(['/app/tabs/today-price']);
      } else {
        var isLogin = localStorage.getItem('isLoginBefore')
        if (isLogin == 'true') {
          this.router.navigate(['/login']);
        }
        else {
          this.router.navigate(['/welcome']);
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#045546');
      this.splashScreen.hide();
    });
  }

  menuClose() {
    this.menu.close();
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  doLogOut() {
    this.menu.close();
    console.log('doLogOut', this.userInfo.id);
    this.util.presentLoading();
    let rawData = {
      "user_id": this.userInfo.id
    }

    this.user.logout(rawData).subscribe(res => {
      localStorage.setItem('isLoginBefore', 'true')
      this.util.dismissLoading();
      let response: any = res;
      console.log('response', response)
      // if (response.status == 'true' || response.status == true) {
      this.storage.clear();
      // this.menuctrl.enable(false);
      this.util.presentToast(response.response.Message);
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500)
      return
      // }
      // else {
      // this.util.presentToast(response.response.Message);
      // }
    }, error => {
      console.log('error', error);
    })
  }
}
