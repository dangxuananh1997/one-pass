import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';
import { Device, DEVICES } from '../../models/device';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

@Component({
  selector: 'page-connect-to-pc',
  templateUrl: 'connect-to-pc.html',
})
export class ConnectToPcPage implements OnInit {
  isLoading: boolean = true;
  selectedDevice: Device;
  deviceList = DEVICES;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public globalVariables: GlobalVariableProvider
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  selectDevice(device: Device) {
    this.selectedDevice = device;
  }

  connectToDevice() {
    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    }).present();
    
    this.globalVariables.isConnectedToDevice = true;

    setTimeout(() => {
      this.alertCtrl.create({
        title: `Connected to ${this.selectedDevice.name}`,
        buttons: ['OK']
      }).present();
    }, 500);
  }

}
