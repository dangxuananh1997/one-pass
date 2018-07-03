import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-generate-password',
  templateUrl: 'generate-password.html',
})
export class GeneratePasswordPage implements OnInit {

  characterCount: number = 6;
  password: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    this.generatePassword();
  }

  generatePassword() {
    this.password = '';
    for (let i = 0; i < this.characterCount; i++) {
      this.password += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    }
  }

}
