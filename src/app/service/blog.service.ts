import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogModel } from '../classModel/blog-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:9999/blog';

  constructor(private http: HttpClient) { }

  addBlog(blog: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.baseUrl, blog);
  }

  deleteBlog(id: number) : Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  updateBlog(blog: BlogModel){
    return this.http.put(`${this.baseUrl}/updateblog`, blog)
    .pipe(catchError(this.handleError));;
  }

  getAllBlogs(){
    return this.http.get<BlogModel[]>(this.baseUrl)
    .pipe(catchError(this.handleError));;
  }

  getUserById(id: number){
    return this.http.get<BlogModel>(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handleError));;
  }

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
