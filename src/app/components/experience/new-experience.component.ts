import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobExperience } from 'src/app/model/job-experience';
import { SJobExperienceService } from 'src/app/service/s-jobExperience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  jobName: string = '';
  jobDescription: string = '';

  constructor(private sJobExperience: SJobExperienceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const jobExperience = new JobExperience(this.jobName, this.jobDescription);

    this.sJobExperience.save(jobExperience).subscribe(
      {
        next: (data) => {
          alert("Job experience added");
          this.router.navigate(['']);
        },
        error: (err) => {
          alert("Adding Job Experience failed");
          this.router.navigate(['']);
        }
      });

  }
}
