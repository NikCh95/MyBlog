import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css']
})
export class AvatarListComponent implements OnInit {

  photo: String  = "https://yt3.ggpht.com/a/AGF-l7_JXyCvAxDrmmgeuk9PLydQNCLAlf5Mc709Iw=s900-c-k-c0xffffffff-no-rj-mo";

    constructor(private authService: ConfigService) { }

  ngOnInit(): void {}

  // Вернуть email
  getUserEmail() {
    return sessionStorage.getItem("email");
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }
  

  onLogOut() {
    this.authService.logout();
  }
}
