import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css']
})
export class AvatarListComponent implements OnInit {

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
