import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

/**
 * Класс иконки-аватарка
 * @author Н.Черненко
 */

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  
  img: string = "https://yt3.ggpht.com/a/AGF-l7_JXyCvAxDrmmgeuk9PLydQNCLAlf5Mc709Iw=s900-c-k-c0xffffffff-no-rj-mo";

  constructor(private authService: ConfigService) { }

  ngOnInit(): void {
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

}
