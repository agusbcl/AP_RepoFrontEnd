import { Component, OnInit } from '@angular/core';
import { JobExperience } from 'src/app/model/job-experience';
import { SJobExperienceService } from 'src/app/service/s-jobExperience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobExperience: JobExperience[] = [];

  constructor(private sJobExperience: SJobExperienceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.addExperience()

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  addExperience(): void {
    this.sJobExperience.list().subscribe(data => { this.jobExperience = data })
  }

  deleteJobExperience(id?: number): void {
    if(id != undefined){
      this.sJobExperience.delete(id).subscribe({
        next: (data) => {
          this.addExperience();
        },
        error: (err) => {
          alert("Delete Job Experience failed");
        }
      });
    }
  }
}
