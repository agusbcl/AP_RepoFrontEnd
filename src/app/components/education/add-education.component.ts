import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})

export class AddEducationComponent implements OnInit {

  eduName: string = '';
  startDate: Date = null;
  endDate: Date = null;
  eduDescription: string = '';

  constructor(private educationService: EducationService, private router: Router, private tokenService: TokenService) {
}
  ngOnInit(): void {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['']);
    }
  }


  onCreate(): void {
    const education = new Education(this.eduName, this.startDate, this.endDate, this.eduDescription);

    this.educationService.save(education).subscribe(
      {
        next: (data) => {
          alert("New education added");
          this.router.navigate(['']);
        },
        error: (err) => {
          alert("Adding education failed");
          this.router.navigate(['']);
        }
      });

  }

}
