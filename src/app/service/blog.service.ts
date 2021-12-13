import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogModel } from '../classModel/blog-model';

/**
 * Класс сущности blog, принцип аналогичен {@link ConfigService}
 */

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8080/blog';

  constructor(private http: HttpClient) { }

  /**
   * Добавить запись
   * @param blog 
   * @returns 
   */
  addBlog(blog: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.baseUrl, blog);
  }

  /**
   * Удалить запись
   * @param id 
   * @returns 
   */
  deleteBlog(id: number) : Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  /**
   * Изменить данные
   * @param blog 
   * @returns 
   */
  updateBlog(blog: BlogModel){
    return this.http.put(`${this.baseUrl}/updateblog`, blog)
    .pipe(catchError(this.handleError));
  }

  /**
   * Найти все записи пользователя
   * @returns 
   */
  getAllBlogs(){
    return this.http.get<BlogModel[]>(this.baseUrl)
    .pipe(catchError(this.handleError));
  }

  /**
   * Найти записи по id
   * @param id 
   * @returns 
   */
  getBlogById(id: number){
    return this.http.get<BlogModel>(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  /**
   * Метод выявления ошибок в методах класса
   * @param httpError 
   * @returns 
   */
  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.error('An error occurred:', httpError.error.message);
    } else {
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
