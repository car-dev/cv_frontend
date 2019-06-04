export class Formation {

    private id: number;
    private titre: string;
    private niveau: number;
    private bac: number;
    private ecole: string;
    private sitewebecole: string;
    private sitewebformation: string;
    private createdat: Date;
    private updatedat: Date;
    private result: boolean;
    private ville: string;

    constructor(id: number, titre: string, niveau: number, bac: number, ecole: string, sitewebecole: string, sitewebformation: string=null, createdat: Date, updatedat: Date, result: boolean, ville: string) {
        this.id = id;
        this.titre = titre;
        this.niveau = niveau;
        this.bac = bac;
        this.ecole = ecole;
        this.sitewebecole = sitewebecole;
        this.sitewebformation = sitewebformation;
        this.createdat = createdat;
        this.updatedat = updatedat;
        this.result = result;
        this.ville = ville;
    }
}