import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private URL = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }
  getVentas() {
    return this.http.get<any>(this.URL + '/listSales')
  }
  createVenta(model) {
    console.log(model)
    return this.http.post(this.URL + '/saveSale',model)
  }
}
