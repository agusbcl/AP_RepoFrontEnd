export class Skill {
    id: number;
    skillName: string;
    percent: number;

    constructor(skillName: string, percent: number){
        this.skillName = skillName;
        this.percent = percent;
    }
}
