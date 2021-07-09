import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public clients = []
  public client = {}
  constructor(private clientService: ClienteService) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(
        res => {
          this.clients = res
          console.log(res)
        },
        err => console.log(err)
      )
  }
  saveClient() {
    console.log(JSON.stringify(this.client))
    this.clientService.save(JSON.stringify(this.client))
      .subscribe(
        res => {
          console.log(res)
          
        },
        err => console.log(err)
      )
  }

}
