import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe({
      next: (data) => {
        this.skill = data;
      },
      error: (err) => {
        alert("Skill showing failed");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe({
      next: (data) => {
        alert("Skill edited successfully");
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Skill edit failed");
        this.router.navigate(['']);
      }
    });
  }

}
