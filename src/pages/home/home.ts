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
        imageUrl: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
        siteName: 'https://www.google.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'https://malwarefox-e4cahqzcal86se23rw2j.netdna-ssl.com/wp-content/uploads/2017/10/facebook-1.png',
        siteName: 'https://www.facebook.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'http://streamersquare.com/wp-content/uploads/2014/09/Twitter-xxl.png',
        siteName: 'https://www.twitter.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Gmail-icon.png',
        siteName: 'https://www.gmail.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-256.png',
        siteName: 'https://www.youtube.com/',
        username: 'dangxuananh1997',
        password: '123456',
      },
      {
        imageUrl: 'http://blueprintpractice.com/wp-content/uploads/2017/02/Instagram-logo-2016-01-128x128-1.png',
        siteName: 'https://www.instagram.com/',
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
