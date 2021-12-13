import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BlogModel } from 'src/app/classModel/blog-model';
import { BlogService } from 'src/app/service/blog.service';
import { ConfigService } from 'src/app/service/config.service';
import { DataAndTimeService } from 'src/app/service/data-and-time.service';

/**
 * Класс сохранения записей пользователя 
 * @author Н.Черненко
 */

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [DatePipe]
})
export class BlogListComponent implements OnInit {

  currentDate = new Date();
  blogForm!: FormGroup;
  todaydate: Date | undefined;
  isAvatar: BehaviorSubject<boolean>;
  text1: String = "Запись успешно сохранена!";
  blog: BlogModel = new BlogModel();
  isAdded = false;

  constructor(private blogService: BlogService, private datePipe: DatePipe,  private myservice: DataAndTimeService, private authService: ConfigService) { 
    this.isAvatar = myservice.isAuthorisation$;
  }

  ngOnInit(): void {
    if (this.isAdded == true) {
      setTimeout(() => {
      }, 3000)
    }
    this.blogForm = new FormGroup({
      name: new FormControl(),
      text: new FormControl(),
      data: new FormControl(this.datePipe.transform(this.currentDate, 'dd-MM-yyyy'))
    });
  }

  onSubmit() {
    this.blog.name = this.blogForm.value.name;
    this.blog.text = this.blogForm.value.text;
    this.blog.data = this.blogForm.value.data;
    this.save();
  }

  save() {
    this.blogService.addBlog(this.blog).subscribe(blog => {console.log(blog);
    this.isAdded = true;
  });
  }

  reserBlogForm() {
    this.blogForm.reset();
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }
}
