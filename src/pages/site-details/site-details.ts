import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, LoadingController, NavController } from 'ionic-angular';
import { Site } from '../../models/site';
import { SiteProvider } from '../../providers/site/site';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

@Component({
  selector: 'page-site-details',
  templateUrl: 'site-details.html',
})
export class SiteDetailsPage implements OnInit {
  site: Site;
  tmpSite: Site;
  isEditing: boolean = false;
  isShowPassword: boolean = false;
  isConnectToDevice: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public siteService: SiteProvider,
    public globalVariables: GlobalVariableProvider
  ) { }

  ngOnInit() {
    if (this.navParams.data) {
      this.site = this.navParams.data.site;
      this.isEditing = this.navParams.data.isEdit;
    }

    this.tmpSite = { ...this.site };

    this.isConnectToDevice = this.globalVariables.isConnectedToDevice;
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

  saveEditSite() {
    this.siteService.updateSite(this.site);
    this.navCtrl.pop();
  }

  deleteSite() {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to delete this site?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Delete',
          handler: () => {
            this.siteService.deleteSite(this.site.id);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
