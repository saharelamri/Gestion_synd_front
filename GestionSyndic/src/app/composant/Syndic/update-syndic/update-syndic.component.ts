import { Component, OnInit } from '@angular/core';
import { Syndic } from 'src/app/models/syndic';
import { SyndicService } from 'src/app/service/synidc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-syndic',
  templateUrl: './update-syndic.component.html',
  styleUrls: ['./update-syndic.component.css']
})
export class UpdateSyndicComponent implements OnInit {
  public syndic:any;
  constructor(private syndicService:SyndicService,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.onget1Syndic();
  }

onget1Syndic(){
  this.syndicService.getSyndic(this.activeRoute.snapshot.params.id)
  .subscribe(data=>
    this.syndic=data
  )}

 OnupdateSyndic(value:any){
    let syn:Syndic = new Syndic(this.activeRoute.snapshot.params.id,value.CiviliteS,value.NomS,value.PrenomS,value.dateNaissanceS,value.EmailS,value.NumtelS,value.AdresseS,value.Role);
    this.syndicService.updateSyndic(syn).subscribe(data=>
      this.router.navigateByUrl("/showsyndic"))}
  }

