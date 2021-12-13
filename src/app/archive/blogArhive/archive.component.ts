import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogModel } from 'src/app/classModel/blog-model';
import { BlogService } from 'src/app/service/blog.service';

/**
 * Класс храннения записей пользователя 
 * @author Н.Черненко
 */

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  
  blogs!: BlogModel[];
  blog!: BlogModel;
  deleteMsg: string = "";
  errorMsg = null;

  constructor(private blogService: BlogService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    console.log("Все записи!");
    this.blogService.getAllBlogs().subscribe(data => {
      console.log(data);
      this.blogs = data;
    })
  }

  onClickDelete(id: number) {
    this.blogService.deleteBlog(id)
      .subscribe(responseData => {
        this.deleteMsg = 'Successfully deleted';
        this.blogService.getAllBlogs().subscribe(data => {
          console.log(data);
          this.blogs = data;
        })
      }, error => {
        this.deleteMsg = error
      });
  }

  blogUpdateForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    text: new FormControl('', [Validators.required, Validators.minLength(3)]),
    data: new FormControl('')

  });

  onClickUpdate(id: number) {
    this.blogService.getBlogById(id)
      .subscribe(responseData => {
        this.blog = responseData;
        console.log(this.blog);
        this.blogUpDateForm();
      });
  }

  blogUpDateForm() {
    this.blogUpdateForm.setValue({
      id: this.blog.id,
      name: this.blog.name,
      text: this.blog.text,
      startDate: this.datePipe.transform(this.blog.data, 'yyyy-MM-dd')
    });
  }

  onSubmit() {
    this.errorMsg = null;
    let blog = new BlogModel();
    blog.id = this.blogUpdateForm.getRawValue().id;
    blog.name = this.blogUpdateForm.getRawValue().name;
    blog.text = this.blogUpdateForm.getRawValue().text;
    blog.data = this.blogUpdateForm.getRawValue().data;
      this.blogService.deleteBlog(this.blogUpdateForm.value.id);
    this.blogService.updateBlog(blog).subscribe(responseDate => {
      this.blogService.getAllBlogs().subscribe(data => {
        this.blogs = data;
      })
    },
      error => console.log(error));
  }
}
