import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-jwt';

  constructor(private share: ShareService,
    private router: Router) {}

  ngOnInit() {
    this.share.currentLogin.subscribe( x => {
      if (x == "") {
          this.router.navigateByUrl("/login");
      }
    })
  }
}
