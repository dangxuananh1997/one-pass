import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneratePasswordPage } from '../generate-password/generate-password';
import { ConnectToPcPage } from '../connect-to-pc/connect-to-pc';

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

  openConnectedToPC() {
    this.navCtrl.push(ConnectToPcPage);
  }

}
