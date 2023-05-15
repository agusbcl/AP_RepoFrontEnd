import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditJobExperienceComponent } from './components/experience/edit-job-experience.component';
import { AddEducationComponent } from './components/education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { AddSkillComponent } from './components/skills/add-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { AddProjectComponent } from './components/project/add-project.component';
import { EditProjectComponent } from './components/project/edit-project.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newexperience', component: NewExperienceComponent},
  {path:'editjobexperience/:id', component: EditJobExperienceComponent},
  {path:'addeducation', component: AddEducationComponent},
  {path:'editeducation/:id', component: EditEducationComponent},
  {path:'addskill', component: AddSkillComponent},
  {path:'editskill/:id', component:EditSkillComponent},
  {path:'editabout/:id', component:EditAboutComponent},
  {path:'addproject', component: AddProjectComponent},
  {path:'editproject/:id', component: EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
