import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAndTimeService {

  
  public isAuthorisation$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setAuthorisation(value: boolean) {
    this.isAuthorisation$.next(value);
  }

  showTodayDate() { 
    let ndate = new Date(); 
    return ndate; 
 }  
}
