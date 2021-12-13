import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/classModel/user-model';
import { ConfigService } from 'src/app/service/config.service';

/**
 * Класс главного меню пользователя
 * @author Н.Черненко
 */

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css']
})
export class AvatarListComponent implements OnInit {

  users!: UserModel[];
  user!: UserModel;
  photo: String  = "https://yt3.ggpht.com/a/AGF-l7_JXyCvAxDrmmgeuk9PLydQNCLAlf5Mc709Iw=s900-c-k-c0xffffffff-no-rj-mo";
  closebutton: any;

  constructor(private authService: ConfigService) { }

  ngOnInit(): void {
    console.log('All user');
    this.authService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

  userUpdateForm = new FormGroup ({
    id: new FormControl({value:'', disabled: true}),
    userName: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    patronymic:  new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    email: new FormControl()
  })

  onClickUpdate(id: number) {
    this.authService.getUserById(id)
    .subscribe(responseData=> {
      this.user = responseData;
      console.log(this.user);
      this.prepareUpdateForm();
    });
  }

  prepareUpdateForm(){
    this.userUpdateForm.setValue({
      id:this.user.id,
      userName:this.user.userName,
      lastName:this.user.lastName,
      patronymic:this.user.patronymic,
      email:this.user
    });
  }

  onSubmit(){
    let user = new UserModel();
    // To get data from a disabled input element
    user.id = this.userUpdateForm.getRawValue().id;
    user.userName = this.userUpdateForm.value.userName;
    user.lastName = this.userUpdateForm.value.lastName;
    user.patronymic = this.userUpdateForm.value.patronymic; 
    user.email = this.userUpdateForm.value.email;

    // user.password = this.userUpdateForm.value.password;
    // user.roles = this.userUpdateForm.value.roles;

    //console.log("USER for update"+ user.userId);
    this.authService.upDateUser(user).subscribe(responseDate=>{
      // to close the modal
      this.closebutton.nativeElement.click();
      // Get the updated list
      this.authService.getAllUsers().subscribe(data =>{  
        //console.log(data);
        this.users = data;  
      })  
    }, 
    error=> console.log(error));
}

  // Вернуть email
  getUserEmail() {
    return sessionStorage.getItem("email");
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }
  

  onLogOut() {
    this.authService.logout();
  }
}
