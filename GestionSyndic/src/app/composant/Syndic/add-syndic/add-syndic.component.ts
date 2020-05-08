import { Component, OnInit } from '@angular/core';
import { Syndic } from 'src/app/models/syndic';
import { SyndicService } from 'src/app/service/synidc.service';

@Component({
  selector: 'app-add-syndic',
  templateUrl: './add-syndic.component.html',
  styleUrls: ['./add-syndic.component.css']
})
export class AddSyndicComponent implements OnInit {

  public currentSyndic:any;
  mode:number=1;
  constructor(private syndicService : SyndicService) { }

  ngOnInit(): void {
  }

  OnsaveSyndic(data:Syndic){
    this.syndicService.createSyndic(data).subscribe(res=>{
      this.currentSyndic=res
      this.mode=2;
      })
  }
  OnewSyndic(){
    this.mode=1;
  }

}
