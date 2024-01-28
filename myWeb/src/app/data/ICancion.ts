export interface ICancion {
    id: number;
    titulo: string;
    grupo: string;
    compositor?: string;
    album?: string;
    anio?: number;
    capo?: string;
    afinacion: string;
    tono?:string
    imagen?: string;
    spotify?: string;
}