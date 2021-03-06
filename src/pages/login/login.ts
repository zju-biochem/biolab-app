import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccountService} from "../../services/account.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginData={
    username:'',
    password:''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public accountSvc: AccountService,
  ) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  doLogin():void{
    this.accountSvc.login(this.loginData.username, this.loginData.password).then(()=>{
        this.navCtrl.pop();
    });
  }

}
