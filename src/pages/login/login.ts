import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = '';
  password: string = '';
  isLogin: boolean = false;
  hasTouchId: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public globalVariable: GlobalVariableProvider,
    private faio: FingerprintAIO
  ) { }

  ionViewDidLoad() {
    if (this.globalVariable.isLogin) {
      this.username = 'test';
    }
    this.faio.isAvailable().then(
     () => {
       this.hasTouchId = true;
     }
    ).catch(() => {});
  }

  login() {
    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    }).present();

    setTimeout(() => {
      if (this.username == 'test' && this.password == '123456' || this.isLogin) {
        this.navCtrl.setRoot(TabsPage);
        this.globalVariable.isLogin = true;
      } else {
        this.alertCtrl.create({
          title: 'Invalid Username or Password',
          buttons: ['OK']
        }).present();
      }
    }, 500);
  }

  loginWithFingerprint() {
    this.faio.show(
      {
        clientId: 'Fingerprint-Demo',
        clientSecret: 'password',
        disableBackup: true
      }
    ).then(
      () => {
        this.isLogin = true;
        this.login();
      },
      () => {

      }
    );
  }

  register() {
    
  }

}
