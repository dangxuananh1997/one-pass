import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Site } from '../../models/site';
import { ActionSheetController, PopoverController, NavController, App } from 'ionic-angular';
import { SiteDetailsPage } from '../../pages/site-details/site-details';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

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
    public globalVariable: GlobalVariableProvider
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
              this.showDetails(site, false);
            });
            return false;
          }
        },
        {
          text: 'Copy username',
          icon: 'ios-copy-outline',
          handler: () => { alert(); }
        },
        {
          text: 'Copy password',
          icon: 'ios-copy',
          handler: () => { }
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
              this.showDetails(site, true);
            });
            return false;
          }
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          icon: 'ios-trash-outline',
          handler: () => {
            this.deleteSite.emit(site.id);
          }
        }
      ]
    });
    actionSheet.present();
  }

  async showDetails(site: Site, isEdit: boolean) {
    // const popover = this.popoverCtrl.create(SiteDetailsPage, site);
    // popover.present();
    this.app.getRootNav().push(SiteDetailsPage, { site, isEdit });
  }

}
