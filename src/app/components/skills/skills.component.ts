import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private skillService: SkillService, private tokenService: TokenService) {
  }

  isLogged = false;

  ngOnInit(): void {
    this.addSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  addSkills() {
    this, this.skillService.list().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillService.delete(id).subscribe({
        next: (data) => {
          this.addSkills();
        },
        error: (err) => {
          alert("Delete skill failed");
        }
      });
    }
  }

}
