export interface IConcierto {
    id?:number
    fecha?:Date;
    sala?:string;
    ciudad?:string;
    videos?:string[];
    grupo?:string;
    festival?:boolean;
    fotos?:boolean;
    entrada?:string;
    descripcion?:string;
    cartel?:string;
    cronica?:string;    
}