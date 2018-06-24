import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Site } from '../../models/site';
import { ActionSheetController, PopoverController } from 'ionic-angular';
import { SiteDetailsPage } from '../../pages/site-details/site-details';

@Component({
  selector: 'site',
  templateUrl: 'site.html'
})
export class SiteComponent implements OnInit {
  @Input() site: Site;
  @Output() deleteSite: EventEmitter<number> = new EventEmitter<number>();

  showPassword: boolean = false;

  constructor(public actionSheetCtrl: ActionSheetController, public popoverCtrl: PopoverController) {
  }

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
              this.showDetails();
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
          text: 'Edit',
          icon: 'ios-create-outline',
          handler: () => { }
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

  async showDetails() {
    const popover = this.popoverCtrl.create(SiteDetailsPage);
    popover.present();
  }

}
