import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Site } from '../../models/site';

@Component({
  selector: 'page-site-details',
  templateUrl: 'site-details.html',
})
export class SiteDetailsPage {

  site: Site;

  constructor(private navParams: NavParams) {

    if (this.navParams.data) {
      this.site = this.navParams.data;
    }
    console.log(this);
  }
}
