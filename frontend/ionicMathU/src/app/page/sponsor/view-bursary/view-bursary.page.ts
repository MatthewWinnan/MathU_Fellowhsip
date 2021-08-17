import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { Bursary } from '../../../model/bursaries';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Company } from '../../../model/company';
import { BursaryService } from '../../../service/bursary.service';

@Component({
  selector: 'app-view-bursary',
  templateUrl: './view-bursary.page.html',
  styleUrls: ['./view-bursary.page.scss'],
})
export class ViewBursaryPage implements OnInit {
  isFetching = false;
  jsonData:Bursary[] = [];
  jsonData_length = 0;
  ourCompany = new Company();

  fruits:string[] = ["A", "B", "C", "D"];

  constructor(
    private platform: Platform,
    public navCtrl:NavController,
    private router:Router,
    private dataService: DataService,
    public _apiService: BursaryService,
  ) { 
    this.platform.ready().then(()=>{
      //ourCompany is stored in LocalStorage (when user logs in)
      this.ourCompany.company_id = 0;
      this.ourCompany.company_name = "Google";
      this.ourCompany.company_industry = "IT & Telecommunications";
      this.ourCompany.comapny_logo = "";
      this.ourCompany.company_description = "";
      this.ourCompany.company_URL = "";
      this.initializeJSONData();
    });
  }

  ngOnInit() {
  }

  initializeJSONData() {
    this.isFetching = true;
    // all bursaries with company_id that are 
    this._apiService.getAllBursary(this.ourCompany).subscribe((res:Bursary[]) => {
      console.log("REQUEST SUCCESS ===", res);
      this.jsonData = res;
      if(res!=null){
        this.jsonData_length = this.jsonData.length;
      }
      this.isFetching = false;
    }, (error:any) => {
      console.log("ERROR ===", error);
      this.jsonData = [];
    });
  }

  filterBursary(ev:any) {
    this.initializeJSONData();
    const val = ev.target.value;
    if (val && val.trim()!= ''){
      this.jsonData = this.jsonData.filter(
        (item)=>{
          //return (item.status.toLowerCase().indexOf(val.toLowerCase()) > -1);
          return (item.bursary_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      )
    }
  }

  openDeactivate(){
    alert("Are you sure?");
  }

  openViewInfo(viewInfoItem){ //passData
    //console.log("clicked");
    //this.navCtrl.navigateForward('./view-more-bursary/view-more-bursary.page');
    
    //console.log(viewInfoItem);
    this.dataService.setData(1, viewInfoItem);
    this.router.navigateByUrl('view-more-bursary/1');
  }

  editBursary(editB){
    this.dataService.setData(1, editB);
    this.router.navigateByUrl('edit-bursary/1')
  }

}
