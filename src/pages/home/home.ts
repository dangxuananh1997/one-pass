import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, App } from 'ionic-angular';
import { Site } from '../../models/site';
import { AddSitePage } from '../add-site/add-site';
import { SiteProvider } from '../../providers/site/site';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public siteProvider: SiteProvider,
    public app: App
  ) { }

  siteList: Site[];

  ngOnInit() {
    this.siteProvider.getSite().then(res => this.siteList = res);
  }
  
  addSite(): void {
    this.app.getRootNav().push(AddSitePage);
  }

  doRefresh(refresher): void {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  deleteSite(id: number): void {
    this.alertCtrl.create({
      title: 'Delete site?',
      message: 'Delete username and password from this site?',
      buttons: [
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            var index = this.siteList.findIndex(site => site.id == id);
            this.siteList.splice(index, 1);
            this.toastCtrl.create({
              message: 'Delete successfull!',
              duration: 1500,
              position: 'bottom'
            }).present();
          }
        },
        {
          text: 'Cancel',
          handler: () => {
          }
        }
      ]
    }).present();
  }

}
