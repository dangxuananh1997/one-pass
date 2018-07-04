import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-connect-to-pc',
  templateUrl: 'connect-to-pc.html',
})
export class ConnectToPcPage implements OnInit {
  isLoading: boolean = true;
  selectedDevice: number = -1;

  deviceList = [
    {
      id: 0,
      icon: 'ios-desktop-outline',
      name: 'AnhDX'
    },
    {
      id: 1,
      icon: 'ios-laptop',
      name: 'DuongPH'
    },
    {
      id: 2,
      icon: 'ios-laptop',
      name: 'QuanNM'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  selectDevice(id: number) {
    this.selectedDevice = id;
  }

}
