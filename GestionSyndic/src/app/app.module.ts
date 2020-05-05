import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowLotComponent } from './Composant/Lot/show-lot/show-lot.component';
import { AddLotComponent } from './Composant/Lot/add-lot/add-lot.component';
import { AddSyndicComponent } from './composant/Syndic/add-syndic/add-syndic.component';
import { UpdateLotComponent } from './composant/Lot/update-lot/update-lot.component';
import { ShowFournisseurComponent } from './composant/Fournisseur/show-fournisseur/show-fournisseur.component';
import { AddFournisseurComponent } from './composant/Fournisseur/add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './composant/Fournisseur/update-fournisseur/update-fournisseur.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowLotComponent,
    AddLotComponent,
    AddSyndicComponent,
    UpdateLotComponent,
    ShowFournisseurComponent,
    AddFournisseurComponent,
    UpdateFournisseurComponent
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
