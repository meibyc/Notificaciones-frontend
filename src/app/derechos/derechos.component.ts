import { Component, OnInit } from '@angular/core';
import { DerechosService } from '../derechos.service';

@Component({
  selector: 'app-derechos',
  templateUrl: './derechos.component.html',
  styleUrls: ['./derechos.component.scss']
})
export class DerechosComponent implements OnInit {
  derechos: any[] = [];
  derecho: any = { idDerechosDeTransito: '', idPersona: '', vigencia: '', valor: 0, placaVehiculo: '', id: 0 };
  modoEdicion: boolean = false;
  derechosSeleccionado: any;
  tiposDocumento: string[] = ['CC', 'TI', 'CE', 'PA'];
  tipoDocumentoBusqueda: string = '';
  documentoBusqueda: string = '';

  constructor(private derechosService: DerechosService) { }

  ngOnInit(): void {
    this.obtenerDerechos();
  }

  obtenerDerechos(): void {
    this.derechosService.obtenerDerechos().subscribe(
      (data: any[]) => {
        this.derechos = data;
      },
      (error) => {
        console.error('Error al obtener derechos:', error);
      }
    );
  }

  guardar() {
    this.derechosService.agregarDerecho(this.derecho).subscribe(
      () => {
        this.obtenerDerechos();
        this.derecho = { idDerechosDeTransito: '', idPersona: '', vigencia: '', valor: 0, placaVehiculo: '', id: 0 };
      },
      (error) => {
        console.error('Error al guardar el derecho:', error);
      }
    );
  }

  editar(derecho: any) {
    this.derecho = { ...derecho }; // Asignar los valores del derecho seleccionado al objeto derecho
    this.modoEdicion = true; // Activar el modo de edición
  }

  actualizar() {
    this.derechosService.editarDerecho(this.derechosSeleccionado.id, this.derechosSeleccionado).subscribe(
      () => {
        this.obtenerDerechos();
        this.modoEdicion = false;
        this.derechosSeleccionado = null;
      },
      (error) => {
        console.error('Error al actualizar el derecho:', error);
      }
    );
  }

  eliminar(id: number) {
    this.derechosService.eliminarDerecho(id).subscribe(
      () => {
        this.obtenerDerechos();
      },
      (error) => {
        console.error('Error al eliminar el derecho:', error);
      }
    );
  }

  seleccionarDerecho(derecho: any) {
    this.derechosSeleccionado = { ...derecho };
    this.modoEdicion = true;
  }

  buscar() {
    if (this.tipoDocumentoBusqueda && this.documentoBusqueda) {
      this.derechosService.buscarDerechos(this.tipoDocumentoBusqueda, this.documentoBusqueda).subscribe(
        (data: any[]) => {
          console.log(data);
          this.derechos = data;
        },
        (error) => {
          console.error('Error al buscar derechos:', error);
        }
      );
    } else {
      this.obtenerDerechos();
    }
  }
}