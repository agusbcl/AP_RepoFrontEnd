import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = environment.URL + '/person'

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<person>{
    return this.http.get<person>(this.URL + '/profile');
  }

}
