import { Component } from '@angular/core';
import { NavController, LoadingController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public app: App) {
  }

  logout() {
    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    }).present();
    setTimeout(() => {
      this.app.getRootNav().setRoot(LoginPage);
    }, 500);
  }

}
