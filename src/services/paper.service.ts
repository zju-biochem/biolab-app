import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {ToastService} from "./toast.service";
import {GetPapersResult, PaperBrief} from "../classes/paper";
import {ApiService} from "./api.service";
import {PaperSearchParam} from "../classes/search-param";
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {CONST} from '../app/const';


@Injectable()
export class PaperService {

  constructor(
    private toastService: ToastService,
    private apiSvc: ApiService,
    private inAppBrowser: InAppBrowser,
  ) {}

  getPapersByLabel(labelId,page:number):Promise<GetPapersResult>{
    return this.apiSvc.get(`/paper/label/${labelId}/papers/${page}/`).then(data=>{
      return data;
    });
  }

  getPapersBySearchBasic(searchText:string,searchField:string,page:number):Promise<GetPapersResult>{
    return this.apiSvc.post(`/paper/search/basic/${page}/`,{
      searchText: searchText,
      field: searchField
    }).then(data=>{
      return data;
    });
  }

  getPapersBySearch(searchParam:PaperSearchParam,page:number):Promise<GetPapersResult>{
    return this.apiSvc.post(`/paper/search/${page}/`,searchParam).then(data=>{
      return data;
    });
  }

  getPaperDetail(paperId){
    return this.apiSvc.get(`/paper/${paperId}/detail/`);
  }

  getLabelList():Promise<any>{
    return this.apiSvc.get(`/paper/label/list/`).then(data=>{
      return data;
    });
  }

  download(paper: PaperBrief) {
    this.inAppBrowser.create(`${CONST.apiUrl}/paper/${paper.id}/download/`,'_system');
  }

  read(paper: PaperBrief) {
    this.inAppBrowser.create(`${CONST.apiUrl}/paper/${paper.id}/preview/`,'_blank',{
      location:'no',
      zoom:'no'
    });
  }



}
