import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Syndic } from '../models/syndic';

@Injectable({
  providedIn: 'root'
})
export class SyndicService {

  private baseUrl= 'http://localhost:8081/syndic';
  
    constructor(private httpClient: HttpClient) { }

    getSyndicList(){
      return this.httpClient.get<Syndic[]>(this.baseUrl+"/all");
    }
  
    getSyndic(id: number) {
      return this.httpClient.get(this.baseUrl+"/get/"+id);
    }
  
    createSyndic(Syndic: Object): Observable<Object> {
      return this.httpClient.post(this.baseUrl+"/add", Syndic);
    }
  
    updateSyndic(Object: Syndic) {
      return this.httpClient.put(this.baseUrl+"/update", Object);
    }
  
    deleteSyndic(id: number) {
      return this.httpClient.delete(this.baseUrl+"/delete/"+id, { responseType: 'text' });
    }
  
   
}
