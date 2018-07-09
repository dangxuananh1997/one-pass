import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Site } from '../../models/site';
import { ActionSheetController, PopoverController, App, ToastController } from 'ionic-angular';
import { SiteDetailsPage } from '../../pages/site-details/site-details';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'site',
  templateUrl: 'site.html'
})
export class SiteComponent implements OnInit {
  @Input() site: Site;
  @Output() deleteSite: EventEmitter<number> = new EventEmitter<number>();

  showPassword: boolean = false;

  constructor(
    public app: App,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController,
    public globalVariable: GlobalVariableProvider,
    public clipboard: Clipboard,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  showSiteOptions(site: Site): void {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Show details',
          icon: 'ios-book-outline',
          cssClass: 'tests',
          handler: () => {
            actionSheet.dismiss().then(() => {
              this.app.getRootNav().push(SiteDetailsPage, { site, isEdit: false });
            });
            return false;
          }
        },
        {
          text: 'Copy username',
          icon: 'ios-copy-outline',
          handler: () => { this.copyToClipboard(site.username); }
        },
        {
          text: 'Copy password',
          icon: 'ios-copy',
          handler: () => { this.copyToClipboard(site.password); }
        },
        {
          text: 'Open in browser',
          icon: 'ios-phone-portrait',
          handler: () => { }
        },
        {
          text: 'Open in connected device',
          icon: 'ios-laptop',
          handler: () => { },
          cssClass: !this.globalVariable.isConnectedToDevice ? 'hidden' : ''
        },
        {
          text: 'Edit',
          icon: 'ios-create-outline',
          handler: () => {
            actionSheet.dismiss().then(() => {
              this.app.getRootNav().push(SiteDetailsPage, { site, isEdit: true });
            });
            return false;
          }
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          icon: 'ios-trash-outline',
          handler: () => {
            actionSheet.dismiss().then(() => {
              this.deleteSite.emit(site.id);
            });
            return false;
          }
        }
      ]
    });
    actionSheet.present();
  }

  copyToClipboard(s: string) {
    this.clipboard.copy(s);
    this.toastCtrl.create({
      message: 'Copied to clipboard!',
      duration: 1500,
      position: 'bottom'
    }).present();
  }
}
