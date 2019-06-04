import { Module } from "./Module";

export class Formation {

    id: number;
    titre: string;
    niveau: number;
    bac: number;
    ecole: string;
    sitewebecole: string;
    sitewebformation: string;
    createdat: Date;
    updatedat: Date;
    result: boolean;
    ville: string;
    modules: Module[];

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