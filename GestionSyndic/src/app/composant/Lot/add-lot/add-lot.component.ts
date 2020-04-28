import { Component, OnInit, Type } from '@angular/core';
import { Lot } from 'src/app/models/lot';
import { LotService } from 'src/app/service/lot.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.css']
})
export class AddLotComponent implements OnInit {

  lot: any;
  
  constructor(private lotService: LotService,
    private router: Router) { }

  ngOnInit() {
  }

  

  Onsave(data:Lot){
    
    this.lotService.createLot(data).subscribe(res=>{
      this.gotoList(); 
      this.lot=res;
          
  
  }) }
  gotoList() {
    this.router.navigate(['/showlot']);
  }
}
  //data => console.log(data), error => console.log(error));
    //this.lot = new Lot();
    //this.gotoList();
  /*}

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/showlot']);
  }
}
*/