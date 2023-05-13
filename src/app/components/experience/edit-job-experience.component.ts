import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobExperience } from 'src/app/model/job-experience';
import { SJobExperienceService } from 'src/app/service/s-jobExperience.service';

@Component({
  selector: 'app-edit-job-experience',
  templateUrl: './edit-job-experience.component.html',
  styleUrls: ['./edit-job-experience.component.css']
})
export class EditJobExperienceComponent implements OnInit {
  jobExp: JobExperience = null;

  constructor(private sJobExperience: SJobExperienceService, private activatedRoute: ActivatedRoute,
    private router: Router) {

  }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sJobExperience.detail(id).subscribe({
      next: (data) => {
        this.jobExp = data;
      },
      error: (err) => {
        alert("Job experience edit failed");
        this.router.navigate(['']);
      }
    });
  }


  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sJobExperience.update(id, this.jobExp).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Job experience edit failed");
        this.router.navigate(['']);
      }
    });
  }

}
