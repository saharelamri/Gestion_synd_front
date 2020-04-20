import { Component, OnInit } from '@angular/core';
import { Lot } from 'src/app/models/lot';
import { LotService } from 'src/app/service/lot.service';

@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.css']
})
export class AddLotComponent implements OnInit {
lot : Lot = new Lot();
submitted = false;
  constructor(private LotService : LotService) { }

  ngOnInit() {
  }
  addLot(): void {
    this.submitted = false;
    this.lot = new Lot();
  }

  save() {
    this.LotService.createLot(this.lot)
      .subscribe(data => console.log(data), error => console.log(error));
    this.lot = new Lot();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
