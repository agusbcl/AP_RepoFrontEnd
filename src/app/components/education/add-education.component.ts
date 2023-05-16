import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { DateService } from 'src/app/service/date-service.service';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  form = this.fb.group({
    eduName: [this.eduName, Validators.required],
    eduDescription: [this.eduDescription, Validators.required],
    startDate: [this.startDate, Validators.required],
    endDate: [this.endDate]
  });

  constructor(private educationService: EducationService, private router: Router, private tokenService: TokenService,
    private dateService: DateService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['']);
    }
  }

  onCreate(): void {
    if (this.form.valid){
      const education = new Education(this.form.get('eduName').value, 
      this.dateService.convertDateToUTC(this.startDate), 
      this.dateService.convertDateToUTC(this.endDate), 
      this.form.get('eduDescription').value);

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
    } else {
      this.form.markAllAsTouched();
    }    
  }
}
