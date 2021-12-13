import { Component, OnInit } from '@angular/core';

/**
 * Класс анкета (лист_2)
 * @author Н.Черненко
 */

@Component({
  selector: 'app-questionnaire2-list',
  templateUrl: './questionnaire2-list.component.html',
  styleUrls: ['./questionnaire2-list.component.css']
})
export class Questionnaire2ListComponent implements OnInit {

  click: boolean = false;
  text1:string = "Гыыы-ииии!"

  constructor() { }

  /**
   * Метод для отображения события по клику
   */
  clickOnTheGuf() {
    this.click = true;
  }

  ngOnInit(): void {
  }

}
