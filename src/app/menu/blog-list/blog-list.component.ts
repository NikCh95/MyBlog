import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { BlogModel } from 'src/app/classModel/blog-model';
import { BlogService } from 'src/app/service/blog.service';
import { DataAndTimeService } from 'src/app/service/data-and-time.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [DatePipe]
})
export class BlogListComponent implements OnInit {

  todaydate: Date | undefined;
  isAvatar: BehaviorSubject<boolean>;


  text1: String = "Запись успешно сохранена!";
  blog: BlogModel = new BlogModel;
  isAdded = false;
  datePipe: any;

  constructor(private blogService: BlogService, private myservice: DataAndTimeService) { 
    this.isAvatar = myservice.isAuthorisation$;
  }
  currentDate = new Date();
  blogForm!: FormGroup;

  ngOnInit(): void {
    if (this.isAdded == true) {
      setTimeout(() => {
        this.text1 = " ";
      }, 3000)
    }
    this.blogForm = new FormGroup({
      name: new FormControl(),
      text: new FormControl(),
      // date: new FormControl(this.datePipe.transform(this.currentDate, 'dd-MM-yyyy'))
    });
    this.todaydate = this.myservice.showTodayDate();
  }

  onSubmit() {
    this.blog.name = this.blogForm.value.name;
    this.blog.text = this.blogForm.value.text;
    // this.blog.data = this.blogForm.value.data;
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

}
