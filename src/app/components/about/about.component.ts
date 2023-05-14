import { Component } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  person: Person;

  constructor( public personService: PersonService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getPerson();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getPerson(){
    this.personService.detail(1).subscribe(
      data => {
        this.person = data;
      }
    )
  }
}
