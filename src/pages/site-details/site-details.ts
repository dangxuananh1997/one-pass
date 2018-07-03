import { Component } from '@angular/core';
import { NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Site } from '../../models/site';

@Component({
  selector: 'page-site-details',
  templateUrl: 'site-details.html',
})
export class SiteDetailsPage {
  site: Site;
  tmpSite: Site;
  isEditing: boolean = false;
  isShowPassword: boolean = false;

  constructor(private navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {

    if (this.navParams.data) {
      this.site = this.navParams.data.site;
      this.isEditing = this.navParams.data.isEdit;
    }

    this.site = {
      id: 1,
      imageUrl: 'assets/imgs/google.png',
      password: 'asdfasdfsdjhfjksdhfj',
      siteUrl: '',
      username: 'adfasdfadf',
      siteName: 'Google'
    };

    this.tmpSite = { ...this.site };
  }

  enableEdit() {
    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    }).present();
    setTimeout(() => {
      this.isEditing = true;
    }, 300);
  }

  cancelEdit() {
    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    }).present();
    setTimeout(() => {
      this.isEditing = false;
      this.site = { ...this.tmpSite };
    }, 300);
  }

  deleteSite() {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to delete this site?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }
}
