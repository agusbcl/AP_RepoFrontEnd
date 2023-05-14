import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit{

  skillName: string;
  percent: number;

  constructor(private skillService: SkillService, private router: Router){

  }

  ngOnInit(): void {
    
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
