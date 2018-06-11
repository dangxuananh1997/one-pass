import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    }).present();
    setTimeout(() => {
      this.navCtrl.setRoot(TabsPage);
    }, 500)
  }

  register() {

  }

}
