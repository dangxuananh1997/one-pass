import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

@Component({
  selector: 'page-generate-password',
  templateUrl: 'generate-password.html',
})
export class GeneratePasswordPage implements OnInit {

  characterCount: number = 6;
  password: string = '';
  isConnectedToDevice: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clipboard: Clipboard,
    public toastCtrl: ToastController,
    public globalVariables: GlobalVariableProvider
  ) { }

  ngOnInit() {
    // this.generatePassword();
    this.isConnectedToDevice = this.globalVariables.isConnectedToDevice;
  }

  generatePassword() {
    this.password = '';
    for (let i = 0; i < this.characterCount; i++) {
      this.password += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    }
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
