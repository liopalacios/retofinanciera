import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
import { DatepickerPopupComponent } from '../datepicker-popup/datepicker-popup.component';
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  public ventas: any = []
  public ventaDetalle:any = []
  constructor(private ventaService: VentaService) { }

  ngOnInit() {
    this.ventaService.getVentas()
      .subscribe(
        res => {
          this.ventas = res
          console.log(res)
        },
        err => console.log(err)
      )
  }
  openModal(ven) {
    this.ventaDetalle = ven.detailsSale
  }
}
