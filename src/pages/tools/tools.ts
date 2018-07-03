import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneratePasswordPage } from '../generate-password/generate-password';

@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage {

  constructor(public navCtrl: NavController) {
  }

  openGeneratePassword() {
    this.navCtrl.push(GeneratePasswordPage);
  }

}
