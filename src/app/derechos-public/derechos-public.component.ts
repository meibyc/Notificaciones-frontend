import { Component } from '@angular/core';
import { DerechosService } from '../derechos.service';

@Component({
  selector: 'app-derechos-public',
  templateUrl: './derechos-public.component.html',
  styleUrls: ['./derechos-public.component.scss']
})
export class DerechosPublicComponent {
  constructor(private derechosService: DerechosService) { }

  derechos: any[] = [];
  derecho: any = { idDerechosDeTransito: '', idPersona: '', vigencia: '', valor: 0, placaVehiculo: '', id: 0 };
  modoEdicion: boolean = false;
  derechosSeleccionado: any;
  placaBusqueda: string = '';
  buscar() {
    if (this.placaBusqueda ) {
      this.derechosService.buscarDerechosPlaca(this.placaBusqueda).subscribe(
        (data: any[]) => {
          console.log(data);
          this.derechos = data;
        },
        (error) => {
          console.error('Error al buscar derechos:', error);
        }
      );
    } 
  }
}
