import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Site } from '../../models/site';
import { AddSitePage } from '../add-site/add-site';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  siteList: Site[];

  ngOnInit() {
    this.siteList = [
      {
        id: 1,
        imageUrl: 'assets/imgs/google.png',
        siteName: 'https://www.google.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 2,
        imageUrl: 'assets/imgs/facebook.png',
        siteName: 'https://www.facebook.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 3,
        imageUrl: 'assets/imgs/twitter.png',
        siteName: 'https://www.twitter.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 4,
        imageUrl: 'assets/imgs/gmail.png',
        siteName: 'https://www.gmail.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 5,
        imageUrl: 'assets/imgs/youtube.png',
        siteName: 'https://www.youtube.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 6,
        imageUrl: 'assets/imgs/instagram.png',
        siteName: 'https://www.instagram.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 7,
        imageUrl: 'assets/imgs/pinterest.jpg',
        siteName: 'https://www.pinterest.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 8,
        imageUrl: 'assets/imgs/microsoft.jpg',
        siteName: 'https://www.microsoft.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        id: 9,
        imageUrl: 'assets/imgs/steam.png',
        siteName: 'https://www.steamcommunity.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
    ]
  }
  
  addSite(): void {
    this.navCtrl.push(AddSitePage);
  }

  doRefresh(refresher): void {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  deleteSite(id: number): void {
    var index = this.siteList.findIndex(site => site.id == id);
    this.siteList.splice(index, 1);
    this.toastCtrl.create({
      message: 'Delete successfull!',
      duration: 1500,
      position: 'bottom'
    }).present();
  }

}
