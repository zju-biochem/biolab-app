import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReagentDetail} from "../../classes/reagent";
import {ReagentService} from "../../services/reagent.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'page-reagent-detail',
  templateUrl: 'reagent-detail.html',
})
export class ReagentDetailPage {

  reagent:ReagentDetail;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private reagentService: ReagentService,
    private toastService: ToastService,
  ) {}

  ionViewWillLoad(){
    this.reagentService.getReagentDetail(this.navParams.get('reagentId')).then(data=>{
      this.reagent=data;
    }).catch(() => {
      this.toastService.toast('获取试剂信息失败');
      this.navCtrl.pop();
    });
  }

}
