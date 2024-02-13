import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private apiUrl = 'http://192.168.1.9:4000/personas'; // Reemplaza con la URL de tu API de personas

  constructor(private http: HttpClient) { }

  // Método para obtener todas las personas
  obtenerPersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // Método para obtener todas las personas
  buscarPersonas(tipo:string, documento:string): Observable<any[]> {
    const url = `${this.apiUrl}/documento/${tipo}/${documento}`;
    return this.http.get<any[]>(url);
  }
  // Método para agregar una nueva persona
  agregarPersona(persona: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, persona);
  }

  // Método para editar una persona existente
  editarPersona(id: number, persona: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, persona);
  }

  // Método para eliminar una persona existente
  eliminarPersona(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' }); // Establece responseType a 'text'
  }
  login(username: string, password: string): Observable<any> {
    return this.http.get<string>(`${this.apiUrl}/login/${username}/${password}`, { responseType: 'text' as 'json' });

  }
}
