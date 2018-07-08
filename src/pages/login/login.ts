import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';
// import { KeychainTouchId } from '@ionic-native/keychain-touch-id';

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
    // private keychainTouchId: KeychainTouchId
  ) { }

  ionViewDidLoad() {
    // alert('check touchid');
    // this.keychainTouchId.isAvailable()
    //   .then((res: any) => {
    //     this.hasTouchId = true;
    //     alert('has touchid')
    //   })
    //   .catch((error: any) => console.error(error));
    if (this.globalVariable.isLogin) {
      this.isLogin = true;
      this.username = 'johndoe';
      // if (this.hasTouchId) {
      //   alert('asd');
      //   this.keychainTouchId.verify(this.username, 'Use your fingerprint')
      //     .then(
      //       (password) => {
      //         this.password == password;
      //         this.login();
      //       }
      //     )
      //     .catch(() => {});
      // }
    }
  }

  login() {
    this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    }).present();

    setTimeout(() => {
      if (this.username == 'johndoe' && this.password == '123456') {
        this.navCtrl.setRoot(TabsPage);
        this.globalVariable.isLogin = true;
        // this.keychainTouchId.save(this.username, this.password);
      } else {
        this.alertCtrl.create({
          title: 'Invalid Username or Password',
          buttons: ['OK']
        }).present();
      }
    }, 500);
  }

  register() {

  }

}
