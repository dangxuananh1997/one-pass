import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Site } from '../../models/site';
import { BASESITES, BaseSite } from '../../models/base-site';
import { SiteProvider } from '../../providers/site/site';

@Component({
  selector: 'page-add-site',
  templateUrl: 'add-site.html',
})
export class AddSitePage {
  site: Site = new Site();
  baseSiteList: BaseSite[] = BASESITES;
  choseOther: boolean = false;
  selectedSiteId: number = 1;
  randomR: number;
  randomG: number;
  randomB: number;

  constructor(
    public navCtrl: NavController,
    public siteService: SiteProvider,
    public toastCtrl: ToastController
  ) { }

  ionViewDidLoad() {
    this.generateRandomSource('');
    this.setSiteName();
  }

  setSiteName() {
    if (this.selectedSiteId > 0) {
      let selectedSite: BaseSite = this.baseSiteList.find(s => s.id == this.selectedSiteId);
      this.site.siteName = selectedSite.siteName;
      this.site.siteUrl = selectedSite.siteUrl;
      this.site.imageUrl = selectedSite.imageUrl;
      this.choseOther = false;
    } else {
      this.choseOther = true;
      this.site.siteName = '';
      this.site.siteUrl = '';
      this.site.imageUrl = '';
    }
  }

  generateRandomSource(str: string) {
    if (str.length == 0) {
      this.randomR = Math.floor(Math.random() * 255) + 1 - 122;
      this.randomG = Math.floor(Math.random() * 255) + 1 - 122;
      this.randomB = Math.floor(Math.random() * 255) + 1 - 122;
    }
  }

  //65-A 122-z ASCII
  getRandomContrastColor(str: string, isBackground: boolean): string {
    let char1 = str.length > 0 ? str.charCodeAt(0) : 120;
    let char2 = str.length > 1 ? str.charCodeAt(1) : 120;
    let char3 = str.length > 2 ? str.charCodeAt(2) : 120;

    let r = this.randomR + char1;
    let g = this.randomG + char2;
    let b = this.randomB + char3;

    if (r < 0 || r > 255) r = 0;
    if (b < 0 || b > 255) b = 0;
    if (g < 0 || g > 255) g = 0;

    let sum = Math.max(...[r, g, b]) + Math.min(...[r, g, b]);
    if (sum > 255) sum = 255;

    if (isBackground) {
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      return `rgb(${sum - r}, ${sum - g}, ${sum - b})`;
    }
  }

  addSite() {
    this.siteService.addSite(this.site);
    this.navCtrl.pop();
    this.toastCtrl.create({
      message: 'Saved!',
      duration: 1500,
      position: 'bottom'
    }).present();
  }

}
