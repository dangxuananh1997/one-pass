import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Site } from '../../models/site';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) {
  }

  siteList: Site[];

  ngOnInit() {
    this.siteList = [
      {
        imageUrl: 'assets/imgs/google.png',
        siteName: 'https://www.google.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/facebook.png',
        siteName: 'https://www.facebook.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/twitter.png',
        siteName: 'https://www.twitter.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/gmail.png',
        siteName: 'https://www.gmail.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/youtube.png',
        siteName: 'https://www.youtube.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/instagram.png',
        siteName: 'https://www.instagram.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/pinterest.jpg',
        siteName: 'https://www.pinterest.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/microsoft.jpg',
        siteName: 'https://www.microsoft.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'assets/imgs/steam.png',
        siteName: 'https://www.steamcommunity.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
    ]
  }
  
  addSite(): void {
  }

  doRefresh(refresher) {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

}
