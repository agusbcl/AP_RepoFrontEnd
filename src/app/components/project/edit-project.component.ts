import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/service/image.service';
import { ProjectService } from 'src/app/service/project-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project: Project = null;

  constructor(private projectService: ProjectService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private tokenService: TokenService) {
      
  }

  ngOnInit(): void {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['']);
    }
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.detail(id).subscribe({
      next: (data) => {
        this.project = data;
      },
      error: (err) => {
        console.log(err);
        alert("Project showing failed");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.update(id, this.project).subscribe({
      next: (data) => {
        alert("Project edited successfully");
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Project edit failed");
        this.router.navigate(['']);
      }
    });
  }

}
