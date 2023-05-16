import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public convertDateToUTC(dateReceived: Date): Date { 
    if (dateReceived == null)
      return null;
      
    let date = new Date(dateReceived);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  }
}
