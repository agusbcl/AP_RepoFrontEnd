export class JobExperience {
    id? : number;
    jobName : string;
    jobDescription : string;

    constructor(jobName: string, jobDescription: string){
        this.jobName = jobName;
        this.jobDescription = jobDescription;
    }
}
