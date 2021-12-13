import { Component, OnInit } from '@angular/core';

/**
 * Класс анкета (лист_1)
 * @author Н.Черненко
 */

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css']
})
export class QuestionnaireListComponent implements OnInit {

  click: boolean = false;
  text1:string = "Гав-гав!"

  constructor() { }

  /**
   * Метод для ловли события по клику
   */
  clickOnTheDog() {
    this.click = true;
  }

  ngOnInit(): void {
  }

}
