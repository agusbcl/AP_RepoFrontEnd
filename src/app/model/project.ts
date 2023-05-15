export class Project {
    id? : number;
    projectName : string;
    projectDescription : string;
    url: string;

    constructor(projectName: string, projectDescription: string, url: string){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.url = url;
    }
}
