import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit{

  edu: Education = null;

  constructor(private educationService: EducationService, private activatedRoute: ActivatedRoute,
    private router: Router) {

  }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe({
      next: (data) => {
        this.edu = data;
      },
      error: (err) => {
        console.log(err);
        alert("Education get failed");
        this.router.navigate(['']);
      }
    });
  }


  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.update(id, this.edu).subscribe({
      next: (data) => {
        alert("Education edited successfully");
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Education edit failed");
        this.router.navigate(['']);
      }
    });
  }



}
