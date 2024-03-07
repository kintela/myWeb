export interface DiscoInfo {
    year: number;
    titulos: string[];
  }
  
  export interface GrupoInfo {
    grupo: string;
    discosPorAnio: DiscoInfo[];
  }
  