import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/service/image.service';
import { ProjectService } from 'src/app/service/project-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {

  projectName: string = '';
  projectDescription: string = '';
  url: string = '';

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['']);
    }
  }

  onCreate(): void {
    const project = new Project(this.projectName, this.projectDescription, this.url);

    this.projectService.save(project).subscribe(
      {
        next: (data) => {
          alert("New project added");
          this.router.navigate(['']);
        },
        error: (err) => {
          alert("Adding project failed");
          this.router.navigate(['']);
        }
      });
  }


}
