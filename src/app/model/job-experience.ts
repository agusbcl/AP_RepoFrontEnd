export class JobExperience {
    id? : number;
    jobName : string;
    startDate : Date;
    endDate: Date;
    jobDescription : string;

    constructor(jobName: string, startDate: Date, endDate: Date, jobDescription: string){
        this.jobName = jobName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.jobDescription = jobDescription;
    }
}
