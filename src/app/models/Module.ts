export class Module {

    private id: number;
    private name: string;
    private formationid: number;
    private createdat: Date;
    private updatedat: Date;
    
    constructor(id: number, name: string, formationid: number, createdat: Date, updatedat: Date) {
        this.id = id;
        this.name = name;
        this.formationid = formationid;
        this.createdat = createdat;
        this.updatedat = updatedat;
    }

}