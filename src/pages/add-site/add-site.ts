import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Site } from '../../models/site';

@Component({
  selector: 'page-add-site',
  templateUrl: 'add-site.html',
})
export class AddSitePage {
  site: Site = new Site();

  constructor(public navCtrl: NavController) {
  }

}
