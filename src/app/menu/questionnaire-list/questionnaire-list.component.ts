import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css']
})
export class QuestionnaireListComponent implements OnInit {

  click: boolean = false;
  text1:string = "Гав-гав!"

  constructor() { }

  clickOnTheDog() {
    this.click = true;
  }

  ngOnInit(): void {
  }

}
