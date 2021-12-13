import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

/**
 * Класс авторизации пользователя 
 * @author Н.Черненко
 */

@Component({
  selector: 'app-authorization-list',
  templateUrl: './authorization-list.component.html',
  styleUrls: ['./authorization-list.component.css']
})
export class AuthorizationListComponent implements OnInit {
  
  //для login
  loginForm!: FormGroup;
  submitted: boolean = false;
  errorMessage = '';
  isLoggedin = false;
  isLoginFailed = false;

  // Атрибуты для наблюдения событий
  text1: string = "Ничего, бывает!"
  text2: string | undefined;
  addClickStatus = false;

  constructor(private loginService: ConfigService, private router: Router) { }

  addClickMetod() {
    this.addClickStatus = true;
  }

  ngOnInit(): void {
    //для login
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

    //Восстановить доступ - диалог
    setTimeout(() => {
      this.text1 = "";
    }, 3000)

    setTimeout(() => {
      this.text2 = "Восстановить доступ!";
    }, 3000)
  }

  onSubmit() {
    this.submitted = true;
    this.loginService.authorization(this.loginForm.value.email, 
    this.loginForm.value.password).subscribe(
        data=>{
            this.isLoggedin = true
            this.router.navigate(['']);
        },
        error=>{
            console.log(error);
            this.errorMessage = error;
            this.isLoggedin = false;
            this.isLoginFailed = true;
        }
    );
  }
}
