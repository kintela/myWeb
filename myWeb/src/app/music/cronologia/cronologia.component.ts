import { Component, OnInit } from '@angular/core';
import { historicoDiscos } from 'src/app/data/historicoDiscos';
import { DiscoInfo, GrupoInfo } from 'src/app/models';


@Component({
  selector: 'app-cronologia',
  templateUrl: './cronologia.component.html',
  styleUrls: ['./cronologia.component.scss']
})
export class CronologiaComponent implements OnInit {
  grupos: GrupoInfo[] = [];
  years: number[] = [];
  columnas: string[] = [];
  pathCaratula:string = 'https://kintela.azureedge.net/assets/assets/caratulas/albums/';

  ngOnInit(): void {
    const discosPorGrupo: { [key: string]: DiscoInfo[] } = {};

    historicoDiscos.forEach(disco => {
      if (!this.years.includes(disco.year)) {
        this.years.push(disco.year);
      }

      if (!discosPorGrupo[disco.grupo]) {
        discosPorGrupo[disco.grupo] = [];
      }

      let discoInfo = discosPorGrupo[disco.grupo].find(d => d.year === disco.year);
      if (!discoInfo) {
        discoInfo = { year: disco.year, titulos: [] };
        discosPorGrupo[disco.grupo].push(discoInfo);
      }

      discoInfo.titulos.push(disco.titulo);
    });

    this.years.sort();

    for (const grupo in discosPorGrupo) {
      this.grupos.push({ grupo, discosPorAnio: discosPorGrupo[grupo] });
    }

    this.grupos.sort((a, b) => a.grupo.localeCompare(b.grupo));

    this.columnas = ['grupo', ...this.years.map(year => year.toString())];

    console.log('Grupos:', this.grupos);
  }    
  
}
