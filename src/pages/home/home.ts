import { Component, OnInit } from '@angular/core';
import { AlertController, App } from 'ionic-angular';
import { Site } from '../../models/site';
import { AddSitePage } from '../add-site/add-site';
import { SiteProvider } from '../../providers/site/site';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public alertCtrl: AlertController,
    public siteProvider: SiteProvider,
    public app: App
  ) { }

  siteList: Site[];

  ngOnInit() {
    this.siteProvider.getSite().then(res => this.siteList = res);
    this.siteProvider.refreshSiteList.subscribe(() => {
      this.siteList = this.siteProvider.siteList;
    });
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
      title: 'Confirm delete',
      message: 'Do you want to delete this site?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Delete',
          handler: () => { this.siteProvider.deleteSite(id); }
        }
      ]
    }).present();
  }

}
