import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/ContactosResponse';
import { BackendService } from 'src/app/services/backend.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listaContactos: Array<Contacto> = [];
  constructor(private backend: BackendService,
    private router: Router,
    private share: ShareService) { }

  ngOnInit(): void {
    if (typeof(Storage) !== 'undefined') {
     let token = localStorage.getItem("token");
     this.backend.getContactos(token ? token : "").subscribe(x => {
       this.listaContactos = x.data
     })
    } else {
      alert("Su browser no soporta localstorage");
    }
    this.share.currentLogin.subscribe(x => {
      console.log(x);
      if (x == "") {
        this.router.navigateByUrl("/login");
      }
    })
  }

  logout() {
    localStorage.setItem("token","")
    this.share.changeLogin("");
  }
}
