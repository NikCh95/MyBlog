import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: ConfigService) { }

  ngOnInit(): void {
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

}
