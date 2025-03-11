import { Component, OnInit, ViewChild } from '@angular/core';
import { IPlato } from '../data/IPlatos';
import { IListaCompra } from '../data/IListaCompra';
import { FormularioRecetaComponent } from './formulario-receta/formulario-receta.component';
import { MatDialog } from '@angular/material/dialog';
import { FormularioCategoriaComponent } from './formulario-categoria/formulario-categoria.component';
import { RecetasService } from '../services/recetas.service';
import { CategoriaDTO } from '../data/DTOs/categoriaDTO';
import { RecetaDTO } from '../data/DTOs/recetaDTO';
import { MenuSemanalDTO } from '../data/DTOs/menuSemanalDTO';
import { MenuSemanalService } from '../services/menuSemanal.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, map } from 'rxjs';
import { ConfirmDialogComponent } from '../shared/confirmdialog/confirmDialog.component';
import { CategoriaService } from '../services/categoria.service';
import { ComunService } from '../services/comun.service';

export interface PlatoEliminadoEvent {
  plato: IPlato;
  dia: string;
  tipo: string;
  orden: 'primerPlato' | 'segundoPlato' | 'postre';
}

@Component({
  selector: 'app-recetas',
  templateUrl: './planificador-menus.component.html',
  styleUrls: ['./planificador-menus.component.scss']
})

export class PlanificadorMenusComponent implements OnInit{
  categorias:CategoriaDTO[] = [];
  recetas:RecetaDTO[] = [];
  platosFiltrados: any[] = [];
  categoriaSeleccionada: CategoriaDTO | null = null;
  platoSeleccionado: IPlato;
  platoParaReceta: IPlato;
  platoEliminado:PlatoEliminadoEvent;
  listaCompra: IListaCompra;
  listaCompraAcumulada: IListaCompra[]=[]; 
  menuSemanal:MenuSemanalDTO;
  menusSemanales: MenuSemanalDTO[] = [];
  selectedMenuId: number;

  displayedColumns: string[] = ['tipo','lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];  

  menuSemanalId: number;
  usuarioId: number;
  ingredienteFiltro: string = '';

  dataSource = [    
    { tipo: 'Comida', 
      lunes: { primerPlato: null, segundoPlato: null }, 
      martes: { primerPlato: null, segundoPlato: null}, 
      miercoles: { primerPlato: null, segundoPlato: null },
      jueves: { primerPlato: null, segundoPlato: null},
      viernes: { primerPlato: null, segundoPlato: null},
      sabado: { primerPlato: null, segundoPlato: null},
      domingo: { primerPlato: null, segundoPlato: null}},
    { tipo: 'Cena', 
      lunes: { platoUnico: null}, 
      martes: { platoUnico: null}, 
      miercoles: { platoUnico: null}, 
      jueves: { platoUnico: null}, 
      viernes: { platoUnico: null}, 
      sabado: { platoUnico: null}, 
      domingo: { platoUnico: null }
    },
  ];
  


  constructor(private dialog: MatDialog, private recetasService:RecetasService, private menuSemanalService:MenuSemanalService,
    private snackBar: MatSnackBar, private recetaService:RecetasService, private categoriaService:CategoriaService, private comunService: ComunService
  ) { }

  ngOnInit(): void {    
    this.menuSemanalService.getAllMenusSemanales().subscribe(
      data => {
        this.menusSemanales = data;
      },
      err => console.error(err)
    );
   
    forkJoin({
      categorias: this.categoriaService.getCategoriasRecetas(),
      recetas: this.recetasService.getRecetas()
    }).subscribe(
      ({ categorias, recetas }) => {
        this.categorias = categorias;
        const todasCategoria: CategoriaDTO = { categoriaId: 0, nombre: 'Todas' };
        this.categorias.push(todasCategoria);
        this.categoriaSeleccionada = todasCategoria;
  
        this.recetas = recetas;
        const todasReceta: RecetaDTO = { recetaId: 0, nombre: 'Todos', ingredientes: [], preparacion: [], presentacion: [], enlaceVideo: '', imagen: '' };
        this.recetas.push(todasReceta);
  
        this.filtrarPlatos();

        this.comunService.setCategorias(this.categorias);
      },
      err => console.error(err)
    );


    this.menuSemanalService.getMenuSemanalActual(1).subscribe(
      data => {
        this.menuSemanal = data;

        this.menuSemanalId = data.menuSemanalId;
        this.usuarioId = data.usuarioId;

        console.log('Menu semanal actual:', data);

        const recetaIdMapping = [];
        const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    
        // Ensure that menuSemanal has at least one element
        if (this.menuSemanal) {
          const menu = this.menuSemanal;
    
          // Extract recetaIds for 'Comida' (Lunch)
          dias.forEach(dia => {
            const primerPlatoId = menu[`recetaPrimerPlato${dia}`];
            const segundoPlatoId = menu[`recetaSegundoPlato${dia}`];
    
            if (primerPlatoId) {
              recetaIdMapping.push({
                dia: dia.toLowerCase(),
                tipo: 'Comida',
                plato: 'primerPlato',
                recetaId: primerPlatoId,
              });
            }
            if (segundoPlatoId) {
              recetaIdMapping.push({
                dia: dia.toLowerCase(),
                tipo: 'Comida',
                plato: 'segundoPlato',
                recetaId: segundoPlatoId,
              });
            }
          });
    
          // Extract recetaIds for 'Cena' (Dinner)
          dias.forEach(dia => {
            const cenaId = menu[`recetaCena${dia}`];
    
            if (cenaId) {
              recetaIdMapping.push({
                dia: dia.toLowerCase(),
                tipo: 'Cena',
                plato: 'platoUnico',
                recetaId: cenaId,
              });
            }
          });
    
          // Fetch all recipes concurrently
          const observables = recetaIdMapping.map(mapping =>
            this.recetaService.getRecetasById(mapping.recetaId).pipe(
              map(receta => ({
                ...mapping,
                receta, // Assuming the recipe is the first element
              }))
            )
          );
    
          // Wait for all recipe requests to complete
          forkJoin(observables).subscribe(results => {
            results.forEach(result => {
              const { dia, tipo, plato, receta } = result;
              const dataSourceEntry = this.dataSource.find(entry => entry.tipo === tipo);
    
              if (dataSourceEntry && dataSourceEntry[dia]) {
                dataSourceEntry[dia][plato] = receta;
              }
            });
    
            // Now the dataSource is updated with the recipes
          });
        } else {
          console.error('menuSemanal is empty or undefined');
          
        }
      },
      err =>{
        if (err === 'No se ha encontrado ningún registro.') {
          this.usuarioId = 1;
          this.snackBar.open('No hay ningún menu cargado para esta semana.', 'Cerrar', {
            duration: 3000,
          });
        } else {
          console.error(err);
        }
      }
    );
    
  }

  
 
  filtrarPlatos() {
    if (this.categoriaSeleccionada.nombre === 'Todas') {
      this.platosFiltrados = this.recetas;
    } else {
      this.recetasService.getRecetasPorCategoria(this.categoriaSeleccionada.nombre).subscribe(
        data => {
          this.platosFiltrados = data;
          this.aplicarFiltroIngrediente();
        },
        err => console.error(err),
        () => {}
      );
      return;
    }
    this.aplicarFiltroIngrediente();
  }

  
  aplicarFiltroIngrediente() {
    if (this.ingredienteFiltro) {
      this.platosFiltrados = this.platosFiltrados.filter(plato =>
        plato.ingredientes && plato.ingredientes.some(ingrediente => ingrediente.toLowerCase().includes(this.ingredienteFiltro.toLowerCase()))
      );
    }
  }

  onCategoriaSeleccionada(categoria: CategoriaDTO) {
    this.categoriaSeleccionada = categoria;
    this.filtrarPlatos();
  } 

  seleccionarPlato(element: any, dia: string, tipoPlato: 'primerPlato' | 'segundoPlato' | 'platoUnico') {  
    if (!element[dia]) {
      element[dia] = { primerPlato: null, segundoPlato: null, platoUnico:null};
    }
    element[dia][tipoPlato] = this.platoSeleccionado;
    // Asegúrate de actualizar el estado del componente para reflejar los cambios
    this.dataSource = [...this.dataSource];
  }
  
  guardarDataSource(){
    const menuSemanalDTO: MenuSemanalDTO = {
      usuarioId: this.usuarioId,
      menuSemanalId: this.menuSemanalId,
      fechaCreacion: new Date().toISOString().split('T')[0],  // Solo la parte de la fecha "YYYY-MM-DD"
      recetaPrimerPlatoLunes: this.dataSource[0].lunes.primerPlato?.recetaId || null,
      recetaSegundoPlatoLunes: this.dataSource[0].lunes.segundoPlato?.recetaId || null,
      recetaCenaLunes: this.dataSource[1].lunes.platoUnico?.recetaId || null,
      recetaPrimerPlatoMartes: this.dataSource[0].martes.primerPlato?.recetaId || null,
      recetaSegundoPlatoMartes: this.dataSource[0].martes.segundoPlato?.recetaId || null,
      recetaCenaMartes: this.dataSource[1].martes.platoUnico?.recetaId || null,
      recetaPrimerPlatoMiercoles: this.dataSource[0].miercoles.primerPlato?.recetaId || null,
      recetaSegundoPlatoMiercoles: this.dataSource[0].miercoles.segundoPlato?.recetaId || null,
      recetaCenaMiercoles: this.dataSource[1].miercoles.platoUnico?.recetaId || null,
      recetaPrimerPlatoJueves: this.dataSource[0].jueves.primerPlato?.recetaId || null,
      recetaSegundoPlatoJueves: this.dataSource[0].jueves.segundoPlato?.recetaId || null,
      recetaCenaJueves: this.dataSource[1].jueves.platoUnico?.recetaId || null,
      recetaPrimerPlatoViernes: this.dataSource[0].viernes.primerPlato?.recetaId || null,
      recetaSegundoPlatoViernes: this.dataSource[0].viernes.segundoPlato?.recetaId || null,
      recetaCenaViernes: this.dataSource[1].viernes.platoUnico?.recetaId || null,
      recetaPrimerPlatoSabado: this.dataSource[0].sabado.primerPlato?.recetaId || null,
      recetaSegundoPlatoSabado: this.dataSource[0].sabado.segundoPlato?.recetaId || null,
      recetaCenaSabado: this.dataSource[1].sabado.platoUnico?.recetaId || null,
      recetaPrimerPlatoDomingo: this.dataSource[0].domingo.primerPlato?.recetaId || null,
      recetaSegundoPlatoDomingo: this.dataSource[0].domingo.segundoPlato?.recetaId || null,
      recetaCenaDomingo: this.dataSource[1].domingo.platoUnico?.recetaId || null,
    };


    this.menuSemanalService.verificarMenuExistente(menuSemanalDTO.usuarioId, menuSemanalDTO.fechaCreacion)
      .subscribe(
        existe => {
          if (existe) {
            // Si el menú ya existe, hacer una solicitud PUT
            this.menuSemanalService.actualizarMenuSemanal(menuSemanalDTO)
              .subscribe(
                data => {
                  this.snackBar.open('El menú se ha actualizado correctamente.', 'Cerrar', {
                    duration: 3000, // Duración en milisegundos
                  });
                },
                err => console.error('Error actualizando el menú semanal', err)
              );
          } else {
            // Si el menú no existe, hacer una solicitud POST
            this.menuSemanalService.enviarMenuSemanal(menuSemanalDTO)
              .subscribe(
                data => {
                  this.snackBar.open('El menú se ha guardado correctamente.', 'Cerrar', {
                    duration: 3000, // Duración en milisegundos
                  });
                },
                err => console.error('Error enviando el menú semanal', err)
              );
          }
        },
        err => console.error('Error verificando la existencia del menú', err)
      );
  }
  

  hayDatosParaGuardar() {
    return this.dataSource.some(dia => {
      // Revisa si algún 'dia' tiene al menos un plato que no sea null
      return Object.values(dia).some(valor => valor !== null && typeof valor === 'object');
    });
  }
  
  
  mostrarFichaReceta(plato: IPlato) {
    this.platoParaReceta = plato;
  }

  eliminarPlato(evento: PlatoEliminadoEvent) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Asegúrate de que la estructura de los datos sea la esperada
        let dia = this.dataSource.find(d => d.tipo === evento.tipo);
        if (dia && dia[evento.dia] && dia[evento.dia][evento.orden] === evento.plato) {
          dia[evento.dia][evento.orden] = null;
        }
  
        // Si se eliminó el plato que estaba siendo usado para la receta, elimina la referencia
        if (this.platoParaReceta === evento.plato) {
          this.platoParaReceta = null;
        }
  
        // Este paso es necesario si estás utilizando la detección de cambios predeterminada
        // Actualiza el dataSource para asegurar que los cambios se reflejen en la vista
        this.dataSource = [...this.dataSource];
  
        // Actualizar el registro en la base de datos
        const menuSemanalDTO = this.convertirDataSourceAMenuSemanalDTO(this.dataSource);
        this.menuSemanalService.actualizarMenuSemanal(menuSemanalDTO).subscribe(
          response => {
            this.snackBar.open('Receta eliminada del menú semanal.', 'Cerrar', {
              duration: 3000, 
            });
          },
          error => {
            console.error('Error al eliminar la receta del menú semanal', error);
          }
        );
      }
    });
  }

  
  mostrarListaCompra(item: IListaCompra) {
    this.listaCompraAcumulada.push(item); 
  }

  abrirDialogoAgregarPlato(): void {
    const dialogRef = this.dialog.open(FormularioRecetaComponent, {
      width: '50%',      
       //data: { categorias: this.categorias , platos: this.recetas}
       data: { categorias: this.categorias , isEditMode: false}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recetasService.getRecetas().subscribe(
          data => {
            this.recetas = data;
            this.filtrarPlatos();
          },
          err => console.error(err)
        );
      }    });
  }

  abrirDialogoEditarPlato(plato: any): void {
    const dialogRef = this.dialog.open(FormularioRecetaComponent, {
      width: '50%',
      data: { categorias: this.categorias, receta: plato, isEditMode: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar los datos del formulario una vez que el diálogo se cierra, si es necesario
    });
  }

  abrirDialogoAgregarCategoria(): void {
    const dialogRef = this.dialog.open(FormularioCategoriaComponent, {
      width: '50%',      
       data: { categorias: this.categorias}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoriaService.getCategoriasRecetas().subscribe(
          data => {
            this.categorias = data;
            const todasCategoria: CategoriaDTO = { categoriaId: 0, nombre: 'Todas' };
            this.categorias.push(todasCategoria);
            this.categoriaSeleccionada = todasCategoria;
          },
          err => console.error(err)
        );
      }    });
  }

  convertirDataSourceAMenuSemanalDTO(dataSource: any[]): MenuSemanalDTO {
    const menuSemanalDTO = new MenuSemanalDTO();
  
    dataSource.forEach(dia => {
      const tipo = dia.tipo.toLowerCase();
      Object.keys(dia).forEach(key => {
        if (key !== 'tipo') {
          const receta = dia[key];
          if (tipo === 'comida') {
            menuSemanalDTO[`recetaPrimerPlato${this.capitalizeFirstLetter(key)}`] = receta.primerPlato ? receta.primerPlato.recetaId : null;
            menuSemanalDTO[`recetaSegundoPlato${this.capitalizeFirstLetter(key)}`] = receta.segundoPlato ? receta.segundoPlato.recetaId : null;
          } else if (tipo === 'cena') {
            menuSemanalDTO[`recetaCena${this.capitalizeFirstLetter(key)}`] = receta.platoUnico ? receta.platoUnico : null;
          }
        }
      });
    });

    menuSemanalDTO.menuSemanalId = this.menuSemanalId;
    menuSemanalDTO.usuarioId = this.usuarioId;
  
    return menuSemanalDTO;
  }
  
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  convertirDataSourceAMenuSemanalDTOOLD(dataSource): MenuSemanalDTO {
    const menuSemanalDTO = new MenuSemanalDTO();
    dataSource.forEach(dia => {
      ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].forEach(d => {
        if (dia.tipo === 'Comida') {
          menuSemanalDTO[`recetaPrimerPlato${d.charAt(0).toUpperCase() + d.slice(1)}`] = dia[d].primerPlato ? dia[d].primerPlato.id : null;
          menuSemanalDTO[`recetaSegundoPlato${d.charAt(0).toUpperCase() + d.slice(1)}`] = dia[d].segundoPlato ? dia[d].segundoPlato.id : null;
        } else if (dia.tipo === 'Cena') {
          menuSemanalDTO[`recetaCena${d.charAt(0).toUpperCase() + d.slice(1)}`] = dia[d].platoUnico ? dia[d].platoUnico.id : null;
        }
      });
    });
    return menuSemanalDTO;
  }

  cargarMenuSemanal(menu: MenuSemanalDTO) {
    const recetaIdMapping = [];
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    dias.forEach(dia => {
      const primerPlatoId = menu[`recetaPrimerPlato${dia}`];
      const segundoPlatoId = menu[`recetaSegundoPlato${dia}`];
      const cenaId = menu[`recetaCena${dia}`];

      if (primerPlatoId) {
        recetaIdMapping.push({
          dia: dia.toLowerCase(),
          tipo: 'Comida',
          plato: 'primerPlato',
          recetaId: primerPlatoId,
        });
      }
      if (segundoPlatoId) {
        recetaIdMapping.push({
          dia: dia.toLowerCase(),
          tipo: 'Comida',
          plato: 'segundoPlato',
          recetaId: segundoPlatoId,
        });
      }
      if (cenaId) {
        recetaIdMapping.push({
          dia: dia.toLowerCase(),
          tipo: 'Cena',
          plato: 'platoUnico',
          recetaId: cenaId,
        });
      }
    });

    const observables = recetaIdMapping.map(mapping =>
      this.recetasService.getRecetasById(mapping.recetaId).pipe(
        map(receta => ({
          ...mapping,
          receta,
        }))
      )
    );

    forkJoin(observables).subscribe(results => {
      results.forEach(result => {
        const { dia, tipo, plato, receta } = result;
        const dataSourceEntry = this.dataSource.find(entry => entry.tipo === tipo);

        if (dataSourceEntry && dataSourceEntry[dia]) {
          dataSourceEntry[dia][plato] = receta;
        }
      });

      this.dataSource = [...this.dataSource];
    });
  }


  onMenuSeleccionado(menuId: number) {
    this.selectedMenuId = menuId;
    const selectedMenu = this.menusSemanales.find(menu => menu.menuSemanalId === menuId);
    if (selectedMenu) {
      this.menuSemanal = selectedMenu;
      this.cargarMenuSemanal(selectedMenu);
    }
  }

  cargarDataSource(event){

  }
  
  

}
