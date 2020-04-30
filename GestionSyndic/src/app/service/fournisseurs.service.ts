import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../models/fournisseur';
@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  //constructor() { }

  private baseUrl= 'http://localhost:8081/Fournisseur';
  
  constructor(private httpClient: HttpClient) { }

  getFournisseurList(){
    return this.httpClient.get<Fournisseur[]>(this.baseUrl+"/get");
  }

  getFournisseur(id: number) {
    return this.httpClient.get(this.baseUrl+"/get/"+id);
  }

  createFournisseur(Fournisseur: Object): Observable<Object> {
    return this.httpClient.post(this.baseUrl+"/add", Fournisseur);
  }

  updateFournisseur(id:number,Object: Fournisseur) {
    return this.httpClient.put(this.baseUrl+"/edit/"+id, Object);
  }

  deleteFournisseur(id: number) {
    return this.httpClient.delete(this.baseUrl+"/supprimer/"+id, { responseType: 'text' });
  }

}
