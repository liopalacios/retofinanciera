import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }
  getClients() {
    return this.http.get<any>(this.URL + '/listClients')
  }
  save(client) {
    console.log(client)
    return this.http.post(this.URL + '/saveClient',client)
  }
  
}
