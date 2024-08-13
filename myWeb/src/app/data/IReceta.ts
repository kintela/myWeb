export interface IReceta {
    recetaId: number;
    nombre: string;
    categorias?: string[];
    menus?: string[];
    enlaceVideo?: string;
    ingredientes?: string[];
    imagen?: string;
    preparacion?: string[];
    presentacion?: string[];
}