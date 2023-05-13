import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[] = [];

  constructor(private edu: EducationService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.addEducation()

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  addEducation(): void {
    this.edu.list().subscribe(data => { this.education = data })
  }

  deleteEducation(id?: number): void {
    if(id != undefined){
      this.edu.delete(id).subscribe({
        next: (data) => {
          this.addEducation();
        },
        error: (err) => {
          alert("Delete education failed");
        }
      });
    }
  }

}
