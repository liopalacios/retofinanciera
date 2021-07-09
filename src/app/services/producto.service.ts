import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private URL = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<any>(this.URL + '/listProducts')
  }
  createProduct(model) {
    console.log(model)
    return this.http.post(this.URL + '/saveProduct',model)
  }
}
