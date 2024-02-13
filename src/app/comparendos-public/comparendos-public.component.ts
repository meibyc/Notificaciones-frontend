import { Component } from '@angular/core';
import { ComparendosService } from '../comparendos.service';

@Component({
  selector: 'app-comparendos-public',
  templateUrl: './comparendos-public.component.html',
  styleUrls: ['./comparendos-public.component.scss']
})
export class ComparendosPublicComponent {
  constructor(private comparendosService: ComparendosService) { }
  tiposDocumento: string[] = ['CC', 'TI', 'CE', 'PA']; // Agrega más tipos según sea necesario
  tipoDocumentoBusqueda: string = '';
  documentoBusqueda: string = '';
  comparendos: any[] = [];
  comparendo: any = { numerocomparendo: '', valorcomparendo: 0, fechacomparendo: '', persona: '', id: 0 };
  ngOnInit(): void {
    
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
    } 
  }
  
}
