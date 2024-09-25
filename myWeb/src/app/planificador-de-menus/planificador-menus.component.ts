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
import { MenuSemanalService } from '../services/menusemanal.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  displayedColumns: string[] = ['tipo','lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];  

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
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {    
    this.recetasService.getCategoriasRecetas().subscribe(
      data=>{
        console.log("categorias",data);
        this.categorias = data;
        const todasCategoria: CategoriaDTO = { categoriaId: 0, nombre: 'Todas' };
        this.categorias.push(todasCategoria);

        this.categoriaSeleccionada = todasCategoria;

      },err=>console.error(err),
      ()=>{}
    );

    this.recetasService.getRecetas().subscribe(
      data=>{      
        this.recetas = data;
        console.log("Recetas",this.recetas);

        const todasReceta: RecetaDTO = { recetaId: 0, nombre: 'Todos', ingredientes: [], preparacion: [], presentacion: [], enlaceVideo: '', imagen: '' };
        this.recetas.push(todasReceta);

        this.filtrarPlatos();
      },err=>console.error(err),
      ()=>{}
    );

    
  }

  filtrarPlatos() {
    if (this.categoriaSeleccionada.nombre === 'Todas') {
      this.platosFiltrados = this.recetas;
    } else {
      this.recetasService.getRecetasPorCategoria(this.categoriaSeleccionada.nombre).subscribe(
        data=>this.platosFiltrados = data,
        err=>console.error(err),
        ()=>{}
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
      usuarioId: 1,
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

    console.log('Menu semanal a enviar:', menuSemanalDTO);

    this.menuSemanalService.verificarMenuExistente(menuSemanalDTO.usuarioId, menuSemanalDTO.fechaCreacion)
      .subscribe(
        existe => {
          if (existe) {
            // Si el menú ya existe, hacer una solicitud PUT
            this.menuSemanalService.actualizarMenuSemanal(menuSemanalDTO)
              .subscribe(
                data => {
                  console.log('Menú semanal actualizado con éxito', data);
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
                  console.log('Menú semanal enviado con éxito', data);
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

  guardarDataSourceOLD() {
    const dataStr = JSON.stringify(this.dataSource);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // Formato: 'aaaa-mm-dd'

    const exportFileDefaultName = `menuSemanal-${formattedDate}.json`;
  
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  cargarDataSource(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = (e.target.result as string);
        this.dataSource = JSON.parse(text);
      };
      reader.readAsText(file);
    }
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
    console.log(evento);
    // Accede a la propiedad específica usando el día y el tipo
    let dia = this.dataSource.find(d => d.tipo === evento.tipo);
    
    // Asegúrate de que la estructura de los datos sea la esperada
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
  }
  
  mostrarListaCompra(item: IListaCompra) {
    console.log(item);
    this.listaCompraAcumulada.push(item); 
  }

  abrirDialogoAgregarPlato(): void {
    const dialogRef = this.dialog.open(FormularioRecetaComponent, {
      width: '50%',      
       data: { categorias: this.categorias , platos: this.recetas}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo fue cerrado');
      // Aquí puedes manejar los datos del formulario una vez que el diálogo se cierra, si es necesario
    });
  }

  abrirDialogoAgregarCategoria(): void {
    const dialogRef = this.dialog.open(FormularioCategoriaComponent, {
      width: '50%',      
       data: { categorias: this.categorias}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo fue cerrado');
      // Aquí puedes manejar los datos del formulario una vez que el diálogo se cierra, si es necesario
    });
  }
  
  

}
