import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  text1: string = "Привет, дорогой друг!"
  text2: string = "...................!";
  text3: string | undefined;

  // Диалог Микки и Минни
  replacement: string = "Минни, а где приветствие?";
  replacement1: string = "Ой, я задумалась!";
  replacement2: string = "Привееетик!";
  replacement3: string = "Мы рады видеть тебя!";
  replacement4: string = "Итак!";
  replacement5: string = "Краткий инструктаж!";
  replacement6: string = "Анкета..";
  replacement7: string = "Это твои друзья!";
  replacement8: string = "Или родные люди!";
  replacement9: string = "Мой дневник!";
  replacement10: string = "Пиши все что хочешь!";
  replacement11: string = "Моя мечта!";
  replacement12: string = "Твои самые,";
  replacement13: string = "желанные мечты!";
  replacement14: string = "Секреты!";
  replacement15: string = "Тццц, никому!";
  replacement16: string = "Даже нам!";
  replacement17: string = "Мой краш!";
  replacement18: string = "Твоя любовь!";
  replacement19: string = "Вот и все!";
  replacement20: string = "У тебя все получиться!";
  replacement21: string = "Любим тебя!";
  replacement22: string = "А давай зарегиструруемся?";
  replacement23: string = "Регистрация";

  ngOnInit(): void {
    setTimeout(() => {
      this.text1 = this.replacement;
    }, 5000)

    setTimeout(() => {
      this.text2 = this.replacement1;
    }, 9000)

    setTimeout(() => {
      this.text2 = this.replacement2;
    }, 12000)

    setTimeout(() => {
      this.text1 = this.replacement3;
    }, 15000)

    setTimeout(() => {
      this.text1 = this.replacement4;
    }, 18000)

    setTimeout(() => {
      this.text1 = this.replacement5;
    }, 21000)

    setTimeout(() => {
      this.text1 = this.replacement6;
    }, 24000)

    setTimeout(() => {
      this.text2 = this.replacement7;
    }, 27000)

    setTimeout(() => {
      this.text2 = this.replacement8;
    }, 30000)

    setTimeout(() => {
      this.text1 = this.replacement9;
    }, 33000)

    setTimeout(() => {
      this.text2 = this.replacement10;
    }, 36000)

    setTimeout(() => {
      this.text1 = this.replacement11;
    }, 39000)

    setTimeout(() => {
      this.text2 = this.replacement12;
    }, 42000)

    setTimeout(() => {
      this.text2 = this.replacement13;
    }, 45000)

    setTimeout(() => {
      this.text1 = this.replacement14;
    }, 48000)

    setTimeout(() => {
      this.text2 = this.replacement15;
    }, 51000)

    setTimeout(() => {
      this.text2 = this.replacement16;
    }, 54000)

    setTimeout(() => {
      this.text1 = this.replacement17;
    }, 57000)

    setTimeout(() => {
      this.text2 = this.replacement18;
    }, 60000)

    setTimeout(() => {
      this.text1 = this.replacement19;
    }, 63000)

    setTimeout(() => {
      this.text1 = this.replacement20;
    }, 66000)

    setTimeout(() => {
      this.text2 = this.replacement21;
    }, 69000)

    setTimeout(() => {
      this.text1 = this.replacement22;
    }, 72000)

    setTimeout(() => {
      this.text1 = "";
    }, 74000)

    setTimeout(() => {
      this.text3 = this.replacement23;
    }, 74000)
  }


  constructor(private authService: ConfigService) { }


  onLogOut() {
    this.authService.logout();
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

}
