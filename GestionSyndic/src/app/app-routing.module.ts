import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowLotComponent } from './Composant/Lot/show-lot/show-lot.component';
import { AddLotComponent } from './Composant/Lot/add-lot/add-lot.component';
import { UpdateLotComponent } from './composant/Lot/update-lot/update-lot.component';


const routes: Routes = [
  {path:"addlot", component : AddLotComponent
  },
  {
    path:"showlot", component : ShowLotComponent
  },
  { path: 'update/:id', component: UpdateLotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
