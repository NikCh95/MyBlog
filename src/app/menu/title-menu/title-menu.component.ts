import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-title-menu',
  templateUrl: './title-menu.component.html',
  styleUrls: ['./title-menu.component.css']
})
export class TitleMenuComponent implements OnInit {

  constructor(private authService: ConfigService) { }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

}
