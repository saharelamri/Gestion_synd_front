import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarnetEntretien } from '../models/carnet';
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class CarnetsService {

 //constructor() { }

 private baseUrl= 'http://localhost:8081/CarnetEntretien';
  
 constructor(private httpClient: HttpClient) { }

 getCarnetEntretienList(){
   return this.httpClient.get<CarnetEntretien[]>(this.baseUrl+"/get");
 }

 getCarnetEntretien(id: number) {
   return this.httpClient.get(this.baseUrl+"/get/"+id);
 }

 createCarnetEntretien(CarnetEntretien: Object): Observable<Object> {
   return this.httpClient.post(this.baseUrl+"/add", CarnetEntretien);
 }

 updateCarnetEntretien(id:number,Object: CarnetEntretien) {
   return this.httpClient.put(this.baseUrl+"/edit/"+id, Object);
 }

 deleteCarnetEntretien(id: number) {
   return this.httpClient.delete(this.baseUrl+"/supprimer/"+id, { responseType: 'text' });
 }

 getFournisseurListId(){
  return this.httpClient.get<Fournisseur[]>(this.baseUrl+"/getbyId");
}


}
