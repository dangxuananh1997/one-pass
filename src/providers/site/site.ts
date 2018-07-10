import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Site } from '../../models/site';
import { ToastController } from 'ionic-angular';

@Injectable()
export class SiteProvider {

  public siteList: Site[];

  public refreshSiteList: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public httpClient: HttpClient,
    public toastCtrl: ToastController
  ) { }

  getSite(): Promise<Site[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('assets/fake-data/site-list.json')
        .toPromise()
        .then((res: Site[]) => {
          this.siteList = res;
          resolve(this.siteList);
        })
        .catch(err => console.log(err));
    });
  }

  addSite(site: Site) {
    site.id = this.siteList[this.siteList.length - 1].id + 1;
    this.siteList.push(site);
    this.refreshSiteList.emit();
  }

  updateSite(site: Site) {
    let s = this.siteList.find(s => s.id == site.id);
    s = site;
    this.refreshSiteList.emit();
  }

  deleteSite(id: number) {
    var index = this.siteList.findIndex(site => site.id == id);
    this.siteList.splice(index, 1);
    this.toastCtrl.create({
      message: 'Delete successfull!',
      duration: 1500,
      position: 'bottom'
    }).present();
    this.refreshSiteList.emit();
  }

}
 