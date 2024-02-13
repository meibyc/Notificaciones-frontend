import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas: any[] = [];
  persona: any = { tipoDocumento: '', documento: '', nombre: '', correo: '', nickName: '', contrasena: '', id: 0 };
  modoEdicion: boolean = false; // Variable para controlar el modo de edición
  personaSeleccionada: any; // Variable para almacenar la persona seleccionada para editar
  tiposDocumento: string[] = ['CC', 'TI', 'CE', 'PA']; // Agrega más tipos según sea necesario
  tipoDocumentoBusqueda: string = ''; // Variable para almacenar el tipo de documento seleccionado en la búsqueda
  documentoBusqueda: string = ''; // Variable para almacenar el documento ingresado en la búsqueda

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.obtenerPersonas(); // Llama a la función para obtener las personas al inicializar el componente
  }

  obtenerPersonas(): void {
    this.personasService.obtenerPersonas().subscribe(
      (data: any[]) => {
        this.personas = data; // Asigna los datos recibidos al arreglo de personas
      },
      (error) => {
        console.error('Error al obtener personas:', error);
      }
    );
  }

  guardar() {
    this.personasService.agregarPersona(this.persona).subscribe(
      () => {
        this.obtenerPersonas(); // Actualiza la lista de personas después de agregar una nueva
        this.persona = { tipoDocumento: '', documento: '', nombre: '', correo: '', nickName: '', contrasena: '', id: 0 }; // Limpiar formulario
      },
      (error) => {
        console.error('Error al guardar la persona:', error);
      }
    );
  }

  editar(persona: any) {
    this.personaSeleccionada = { ...persona }; // Copia la persona seleccionada para editar
    this.persona = { ...this.personaSeleccionada }; // Asigna la persona seleccionada al modelo de persona en el formulario
    this.modoEdicion = true; // Activa el modo de edición
  }

  actualizar() {
    this.personasService.editarPersona(this.personaSeleccionada.id, this.personaSeleccionada).subscribe(
      () => {
        this.obtenerPersonas(); // Actualiza la lista de personas después de editar una
        this.modoEdicion = false; // Desactiva el modo de edición
        this.personaSeleccionada = null; // Limpia la persona seleccionada
      },
      (error) => {
        console.error('Error al actualizar la persona:', error);
      }
    );
  }

  eliminar(id: number) {
    this.personasService.eliminarPersona(id).subscribe(
      () => {
        this.obtenerPersonas(); // Actualiza la lista de personas después de eliminar una
      },
      (error) => {
        console.error('Error al eliminar la persona:', error);
      }
    );
  }

  buscar() {
    // Verifica si se ha ingresado tanto el tipo de documento como el documento
    if (this.tipoDocumentoBusqueda && this.documentoBusqueda) {
      // Filtrar las personas según el tipo de documento y el documento ingresado
      this.personasService.buscarPersonas(this.tipoDocumentoBusqueda, this.documentoBusqueda).subscribe(
        (data: any[]) => {
          console.log(data);
          this.personas = data; // Asigna los resultados de la búsqueda a la lista de personas
        },
        (error) => {
          console.error('Error al buscar personas:', error);
        }
      );
    } else {
      // Si no se ingresaron ambos campos, se obtienen todas las personas
      this.obtenerPersonas();
    }
  }
}
