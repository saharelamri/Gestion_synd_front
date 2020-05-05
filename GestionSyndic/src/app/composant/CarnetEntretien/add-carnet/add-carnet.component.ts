import { Component, OnInit } from '@angular/core';
import { CarnetEntretien } from 'src/app/models/carnet-entretien';
import { CarnetsService } from 'src/app/service/carnet-entretien.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-carnet',
  templateUrl: './add-carnet.component.html',
  styleUrls: ['./add-carnet.component.css']
})
export class AddCarnetComponent implements OnInit {

  // constructor() { }

  public currentCarnet:any;
  mode:number=1;
  id:number;
  constructor(private fournisseursService : CarnetsService, private router : Router ) { }
 
  ngOnInit(): void {
  }
 
  OnsaveCarnet(data:CarnetEntretien){
    this.fournisseursService.createCarnetEntretien(data).subscribe(res=>{
      this.currentCarnet=res
      this.mode=2;
      this.gotolist();
      }
      ,err=>{console.log(err);
     })
  
   } 
 gotolist(){
   this.router.navigateByUrl("carnets/lister");
 }
  
  OnewCarnet(){
    this.mode=1;
  }
 

}

