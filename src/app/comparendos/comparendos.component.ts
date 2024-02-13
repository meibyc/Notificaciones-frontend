import { Component, OnInit } from '@angular/core';
import { ComparendosService } from '../comparendos.service';

@Component({
  selector: 'app-comparendos',
  templateUrl: './comparendos.component.html',
  styleUrls: ['./comparendos.component.scss']
})
export class ComparendosComponent implements OnInit {
  comparendos: any[] = [];
  comparendo: any = { numerocomparendo: '', valorcomparendo: 0, fechacomparendo: '', persona: '', id: 0 };
  modoEdicion: boolean = false;
  comparendoSeleccionado: any;
  tiposDocumento: string[] = ['CC', 'TI', 'CE', 'PA']; // Agrega más tipos según sea necesario
  tipoDocumentoBusqueda: string = '';
  documentoBusqueda: string = '';

  constructor(private comparendosService: ComparendosService) { }

  ngOnInit(): void {
    this.obtenerComparendos();
  }

  obtenerComparendos(): void {
    this.comparendosService.obtenerComparendos().subscribe(
      (data: any[]) => {
        this.comparendos = data.map(comparendo => {
          return {
            ...comparendo,
            fechaComparendo: this.formatDate(comparendo.fechaComparendo),
            fechaNotificacion: this.formatDate(comparendo.fechaNotificacion)
          };
        });
      },
      (error) => {
        console.error('Error al obtener comparendos:', error);
      }
    );
  }

  guardar() {
    this.comparendosService.agregarComparendo(this.comparendo).subscribe(
      () => {
        this.obtenerComparendos();
        this.comparendo = { numerocomparendo: '', valorcomparendo: 0, fechacomparendo: '', persona: '', id: 0 };
      },
      (error) => {
        console.error('Error al guardar el comparendo:', error);
      }
    );
  }

  editar(comparendo: any) {
    this.comparendoSeleccionado = { ...comparendo };
    this.modoEdicion = true;
  }

  actualizar() {
    this.comparendosService.editarComparendo(this.comparendoSeleccionado.id, this.comparendoSeleccionado).subscribe(
      () => {
        this.obtenerComparendos();
        this.modoEdicion = false;
        this.comparendoSeleccionado = null;
      },
      (error) => {
        console.error('Error al actualizar el comparendo:', error);
      }
    );
  }

  eliminar(id: number) {
    this.comparendosService.eliminarComparendo(id).subscribe(
      () => {
        this.obtenerComparendos();
      },
      (error) => {
        console.error('Error al eliminar el comparendo:', error);
      }
    );
  }

  seleccionarComparendo(comparendo: any) {
    comparendo.fechaComparendo = this.formatDate(comparendo.fechaComparendo);
    comparendo.fechaNotificacion = this.formatDate(comparendo.fechaNotificacion);
    this.comparendo = { ...comparendo };
    this.modoEdicion = true;
  }

  formatDate(date: string): string {
    return date.split('T')[0];
  }

  buscar() {
    if (this.tipoDocumentoBusqueda && this.documentoBusqueda) {
      this.comparendosService.buscarComparendos(this.tipoDocumentoBusqueda, this.documentoBusqueda).subscribe(
        (data: any[]) => {
          this.comparendos = data.map(comparendo => {
            return {
              ...comparendo,
              fechaComparendo: this.formatDate(comparendo.fechaComparendo),
              fechaNotificacion: this.formatDate(comparendo.fechaNotificacion)
            };
          });
        },
        (error) => {
          console.error('Error al buscar comparendos:', error);
        }
      );
    } else {
      this.obtenerComparendos();
    }
  }
}