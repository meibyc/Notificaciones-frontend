import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DerechosService {
  private apiUrl = 'http://192.168.1.9:4000/derechos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener todos los derechos
  obtenerDerechos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
   // Método para obtener todas las personas
   buscarDerechos(tipo:string, documento:string): Observable<any[]> {
    const url = `${this.apiUrl}/derechosdocumento/${tipo}/${documento}`;
    return this.http.get<any[]>(url);
  }
  buscarDerechosPlaca(placa:string): Observable<any[]> {
    const url = `${this.apiUrl}/derechosplaca/${placa}`;
    return this.http.get<any[]>(url);
  }
  // Método para agregar un nuevo derecho
  agregarDerecho(derecho: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, derecho);
  }

  // Método para editar un derecho existente
  editarDerecho(id: number, derecho: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, derecho);
  }

  // Método para eliminar un derecho existente
  eliminarDerecho(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}