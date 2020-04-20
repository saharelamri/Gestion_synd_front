import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lot } from '../models/lot';

@Injectable({
  providedIn: 'root'
})
export class LotService {
  private baseUrl= '/http://localhost:8080/Lot';

  constructor(private httpClient: HttpClient) { }

  getLot(id: number) {
    return this.httpClient.get(this.baseUrl+"/get/"+id);
  }

  createLot(Lot: Object): Observable<Object> {
    return this.httpClient.post(this.baseUrl+"/add", Lot);
  }

  updateLot(id: number, value: any) {
    return this.httpClient.put(this.baseUrl+"/update/"+id, value);
  }

  deleteLot(id: number) {
    return this.httpClient.delete(this.baseUrl+"/delete/"+id, { responseType: 'text' });
  }

  getLotList(){
    return this.httpClient.get<Lot[]>(this.baseUrl+"/all");
  }
}
