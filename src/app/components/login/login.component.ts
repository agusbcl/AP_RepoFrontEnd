import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtDto } from 'src/app/model/jwt-dto';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {
  isLogged = false;
  loginFailed = false;
  loginUser!: LoginUser;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsg!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.loginFailed = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  onLogin(): void {
    this.loginUser = new LoginUser(this.userName, this.password);
    this.authService.loginUser(this.loginUser).subscribe(
      {
        next: (data) => {
          this.isLogged = true;
          this.loginFailed = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.userName);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['']);
        },
        error: (err) => {
          this.isLogged = false;
          this.loginFailed = true;
          this.errMsg = err.error.message;
          console.log(this.errMsg);
        }
      });
  }
}
