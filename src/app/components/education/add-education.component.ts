import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})

export class AddEducationComponent implements OnInit {

  eduName: string = '';
  eduDescription: string = '';

  constructor(private educationService: EducationService, private router: Router) {
}
  ngOnInit(): void {
  }


  onCreate(): void {
    const education = new Education(this.eduName, this.eduDescription);

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
