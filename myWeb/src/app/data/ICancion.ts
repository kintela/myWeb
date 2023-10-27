export interface ICancion {
    titulo: string;
    grupo: string;
    compositor?: string;
    album?: string;
    anio?: number;
    capo?: string;
    afinacion: string;
    tono?:string
    imagen?: string;
    enlace?: string;
}