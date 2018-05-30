import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Site } from '../../models/site';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'site',
  templateUrl: 'site.html'
})
export class SiteComponent implements OnInit {
  @Input() site: Site;
  @Output() deleteSite: EventEmitter<number> = new EventEmitter<number>();

  showPassword: boolean = false;

  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit() {
  }

  showSiteOptions(site: Site) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Show details',
          icon: 'ios-book-outline',
          cssClass: 'tests',
          handler: () => { }
        }, 
        {
          text: 'Copy username',
          icon: 'ios-copy-outline',
          handler: () => { }
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

}
