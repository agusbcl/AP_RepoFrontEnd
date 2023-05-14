import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobExperience } from '../model/job-experience';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SJobExperienceService {

  URL = environment.URL + '/jobexperience'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<JobExperience[]> {

    return this.httpClient.get<JobExperience[]>(this.URL + '/list');

  }

  public detail(id: number): Observable<JobExperience> {
    return this.httpClient.get<JobExperience>(this.URL + `/detail/${id}`);
  }

  public save(jobExperience: JobExperience): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', jobExperience);
  }

  public update(id: number, jobExperience: JobExperience): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, jobExperience);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }

}
