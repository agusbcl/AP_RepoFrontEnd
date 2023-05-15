import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project[] = [];

  constructor(private projectService: ProjectService, private tokenService: TokenService) {

  }

  isLogged = false;

  ngOnInit(): void {

    this.addProject()

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  addProject() {
    this.projectService.list().subscribe(data => { this.project = data })
  }

  deleteProject(id?: number): void {
    if (id != undefined) {
      this.projectService.delete(id).subscribe({
        next: (data) => {
          this.addProject();
        },
        error: (err) => {
          alert("Delete project failed");
        }
      });
    }
  }
}
