import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparendosService {
  private apiUrl = 'http://192.168.1.9:4000/comparendos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener todos los comparendos
  obtenerComparendos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
    // Método para obtener todos los comparendos
    obtenerComparendo(id: number): Observable<any[]> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<any[]>(url);
    }
      // Método para obtener todas las personas
      buscarComparendos(tipo:string, documento:string): Observable<any[]> {
    const url = `${this.apiUrl}/comparendodocumento/${tipo}/${documento}`;
    return this.http.get<any[]>(url);
  }

  // Método para agregar un nuevo comparendo
  agregarComparendo(comparendo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, comparendo);
  }

  // Método para editar un comparendo existente
  editarComparendo(id: number, comparendo: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, comparendo);
  }

  // Método para eliminar un comparendo existente
  eliminarComparendo(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' }); // Establece responseType a 'text'
  }
}