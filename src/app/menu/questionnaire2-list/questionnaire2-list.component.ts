import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire2-list',
  templateUrl: './questionnaire2-list.component.html',
  styleUrls: ['./questionnaire2-list.component.css']
})
export class Questionnaire2ListComponent implements OnInit {

  click: boolean = false;
  text1:string = "Гыыы-ииии!"

  constructor() { }

  clickOnTheGuf() {
    this.click = true;
  }

  ngOnInit(): void {
  }

}
