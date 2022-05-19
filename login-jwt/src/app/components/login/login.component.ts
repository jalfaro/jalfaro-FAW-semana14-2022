import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { BackendService } from 'src/app/services/backend.service';
import { ShareService } from 'src/app/services/share.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor(private backend: BackendService,
    private fb: FormBuilder,
    private share: ShareService,
    private router: Router)
     { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      login: '',
      pass: ''
    })
  }

  login() {
  
    //console.log("Hash" + this.MD5.appendStr(this.formGroup.controls["pass"].value).end());
    console.log();
    let login = new LoginRequest(this.formGroup.controls["login"].value, Md5.hashStr(this.formGroup.controls["pass"].value))
    this.backend.login(login).subscribe(x => {
      console.log(x);
      if (typeof(Storage) !== 'undefined') {
        localStorage.setItem("token", x.key);
        this.share.changeLogin(this.formGroup.controls["login"].value);
        this.router.navigateByUrl("/listado")
      } else {
        alert("Su browser no soporta localstorage");
      }
      
    })
  }
}
