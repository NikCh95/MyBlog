import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from '../classModel/blog-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8080/blog';

  constructor(private http: HttpClient) { }

  addBlog(blog: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.baseUrl, blog);
  }

  deleteBlog(id: number) : Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateBlog(blog: BlogModel){
    return this.http.put(`${this.baseUrl}/upDateBlog`, blog);
  }

  getAllBlogs(){
    return this.http.get<BlogModel[]>(this.baseUrl);
  }

  getUserById(id: number){
    return this.http.get<BlogModel>(`${this.baseUrl}/${id}`);
  }
}
