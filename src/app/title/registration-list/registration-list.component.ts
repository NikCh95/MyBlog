import { Element } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/classModel/user-model';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  // Для сущности user
  user = new UserModel(' ', ' ', ' ', []);
  registrationForm!: FormGroup;
  isRegistred = false;
  submitted = false;
  errorMessage = '';
  isAdded: boolean = false;

  roles: any = [{ name: 'User', id: 1, selected: true },
                { name: 'Admin', id: 2, selected: false },
]
  selectedRoles!: string[];
 

  // Для настройки событий
  addClickStatus = false;
  textDonaldDuck: String = "Ура!Успешная регистрация!"

  addClickMetod() {
    this.addClickStatus = true;
  }

  // Настройка сохранения пользователя
  constructor(private userService: ConfigService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(10)]),
      password: new FormControl(),
      email: new FormControl(), 
      roleSelection: this.createRoles(this.roles)
    });
  }

  createRoles(rolesList: any[]): FormArray {
    const arr = rolesList.map((role: { selected: any; }) => {
      return new FormControl(role.selected)
    });
    return new FormArray(arr);
  }

  onSubmit() {
    this.submitted = true;
    this.user.userName = this.registrationForm!.value.userName;
    this.user.password = this.registrationForm!.value.password;
    this.user.email = this.registrationForm!.value.email;
    this.user.roles = this.getSelectedRoles();
    this.save();
  }

  save() {
    this.userService.registration(this.user)
      .subscribe(user => {
        console.log(user);
        this.isAdded = true;
      }, error => {
        console.log(error);
        this.errorMessage = error;
        this.isAdded = false;
      });
  }

  getSelectedRoles(): string[] {
     this.selectedRoles = this.registrationForm!.value.roleSelection.map((selected: any, i: string | number ) => {
      if (selected) {
        return this.roles[i].name;
      } else {
        return ' ';
      }
    });
    return this.selectedRoles.filter(function(element) {
      if(element == '') {
      }
    });
  }
  resetUserForm() {
    this.isAdded = false;
    this.registrationForm?.reset();
  }
}

