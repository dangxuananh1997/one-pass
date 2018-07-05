import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { GeneratePasswordPage } from '../generate-password/generate-password';
import { ConnectToPcPage } from '../connect-to-pc/connect-to-pc';

@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage {

  constructor(public app: App) {
  }

  openGeneratePassword() {
    this.app.getRootNav().push(GeneratePasswordPage);
  }

  openConnectedToPC() {
    this.app.getRootNav().push(ConnectToPcPage);
  }

}
