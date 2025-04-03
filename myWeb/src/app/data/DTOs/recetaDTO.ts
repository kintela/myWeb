export interface RecetaDTO {
    recetaId: number;
    nombre: string;
    ingredientes: string[];
    preparacion: string[];
    presentacion: string[];
    enlaceVideo: string;
    imagen?: string;
    imagenFile?:string;
    comensales?: number;
  }
  