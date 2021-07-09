import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public products = []
  public product = {}
  constructor(private productService:ProductoService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res
          console.log(res)
        },
        err => console.log(err)
      )
  }

}
