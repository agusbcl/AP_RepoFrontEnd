import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../model/new-user';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = environment.URL + '/auth'

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/new', newUser);
  }

  public loginUser(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.URL + '/login', loginUser);
  }

}
