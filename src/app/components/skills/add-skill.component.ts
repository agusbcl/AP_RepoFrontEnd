import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit{

  skillName: string;
  percent: number;

  constructor(private skillService: SkillService, private router: Router, private tokenService: TokenService){

  }

  ngOnInit(): void {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['']);
    }
  }

  onCreate(): void {
    const skill = new Skill(this.skillName, this.percent);
    this.skillService.save(skill).subscribe(
      {
        next: (data) => {
          alert("New skill added");
          this.router.navigate(['']);
        },
        error: (err) => {
          alert("Adding skill failed");
          this.router.navigate(['']);
        }
      });
  }

}
