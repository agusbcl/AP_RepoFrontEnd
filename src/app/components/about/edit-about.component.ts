import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  person: Person;

  constructor(private personService: PersonService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private imageService: ImageService){

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.detail(id).subscribe({
      next: (data) => {
        this.person = data;
      },
      error: (err) => {
        console.log(err);
        alert("Person showing failed");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.update(id, this.person).subscribe({
      next: (data) => {
        alert("Person edited successfully");
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Person edit failed");
        this.router.navigate(['']);
      }
    });
  }

  uploadImage($event:any){
    this.imageService.uploadImage($event);
  }
}
