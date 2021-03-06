import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {UserInfo} from "../classes/user";

@Injectable()
export class AccountService {

  user: UserInfo = null;

  constructor(
    private apiSvc: ApiService,
  ) {}

  login(username:string, password:string):Promise<void>{
    return this.apiSvc.post('/user/login/',{
      username: username,
      password: password
    }).then((userInfo:UserInfo) => {
      this.user=userInfo;
    });
  }

  logout():Promise<void>{
    return this.apiSvc.get('/user/logout/').then(() => {
      this.user=null;
    });
  }

  getUserInfo(userId:number=null){
    let p = this.apiSvc.get(`/user/${userId==null?'':userId+'/'}info/`);
    if(userId==null){
      p =p.then((userInfo: UserInfo) => {
        this.user=userInfo;
        return userInfo;
      });
    }
    return p;
  }

  async changePassword(oldPassword:string, newPassword:string) {
    await this.apiSvc.post(`/user/change-password/`, {
      newPassword,
      oldPassword
    });
    this.user = null;
  }

}
