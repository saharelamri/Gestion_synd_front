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
import { FournisseursComponent } from './composant/fournisseurs/fournisseurs.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowLotComponent,
    AddLotComponent,
    AddSyndicComponent,
    UpdateLotComponent,
    FournisseursComponent
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
