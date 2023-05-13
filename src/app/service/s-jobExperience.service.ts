import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobExperience } from '../model/job-experience';

@Injectable({
  providedIn: 'root'
})
export class SJobExperienceService {

  expURL = 'http://localhost:8080/jobexperience/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<JobExperience[]> {

    return this.httpClient.get<JobExperience[]>(this.expURL + 'list');

  }

  public detail(id: number): Observable<JobExperience> {
    return this.httpClient.get<JobExperience>(this.expURL + `detail/${id}`);
  }

  public save(jobExperience: JobExperience): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', jobExperience);
  }

  public update(id: number, jobExperience: JobExperience): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, jobExperience);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}
