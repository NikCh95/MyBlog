import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from '../classModel/user-model';

/**
 * Класс для регистрации и авторизации пользователя! Основные методы GET and PUT
 * @author Н.Черненко
 */

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
// http UserController and AuthController
  private baseUrl = 'http://localhost:8080/auth/';
  private baseUrlUser = 'http://localhost:8080/user/';

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Регистрация пользователя
   * @param user 
   * @returns 
   */
  registration(user: UserModel): Observable<any> {
    return this.http.post(this.baseUrl + 'registration', user, { headers, responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  /**
   * Найти всех пользователей
   * @returns 
   */
  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrlUser+'allusers', {responseType:'text'})
                                     .pipe(catchError(this.handleError))
  }

  /**
   * 
   * @param id Найти пользователя по id
   * @returns 
   */
  getUserById(id: number){
    return this.http.get<UserModel>(`${this.baseUrlUser}/${id}`)
                      .pipe(catchError(this.handleError));
  }

  /**
   * Изменение данных пользователя
   * @param user 
   * @returns 
   */
  upDateUser(user: UserModel) {
     return this.http.put(`${this.baseUrlUser}/updateuser`, user)
    .pipe(catchError(this.handleError));
  }


  /**
   * Авторизация пользователя
   * @param user 
   * @param password 
   * @returns 
   */
  authorization(user: string, password: string) {
    return this.http.post<any>(this.baseUrl + 'authorization',
      { email: user, password: password }, { headers })
      .pipe(catchError(this.handleError),
        map(userData => {
          sessionStorage.setItem("email", user);
          let tokenStr = "Bearer " + userData.token;
          console.log("Token---  " + tokenStr);
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("roles", JSON.stringify(userData.roles));
          return userData;
        })
      );
  }

  /**
   * Выйти после авторизации пользователя
   */
  logout() {
    sessionStorage.clear()
    this.router.navigate(['/authorization']);
  }

  /**
   * Появление или скрытие компонента после регистрации.
   * @returns 
   */
  isLoggedIn(): boolean {
    return sessionStorage.getItem('email') !== null;
  }

  /**
   * Метод логирования ошибок при выполнении методов данного класса
   * @param httpError 
   * @returns 
   */
  private handleError(httpError: HttpErrorResponse) {
    let message: string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('в процессе событие')
      message = "Ошибка сети";
    }
    else {
      message = httpError.error.message;
      // Серверная часть вернула неудачный код ответа.
      // В теле ответа может содержаться информация о том, что пошло не так.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Вернуть наблюдаемый объект с сообщением об ошибке, обращенным к пользователю.
    return throwError(message);
  }
}

