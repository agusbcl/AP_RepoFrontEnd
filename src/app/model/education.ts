export class Education {
    id? : number;
    eduName : string;
    startDate : Date;
    endDate: Date;
    eduDescription : string;

    constructor(eduName: string, startDate: Date, endDate: Date, eduDescription: string){
        this.eduName = eduName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.eduDescription = eduDescription;
    }
}
