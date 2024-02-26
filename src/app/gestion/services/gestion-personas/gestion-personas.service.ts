import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GestionPersonasService {
  urlBackend = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getAllPersonas() {
    return this.http.get<any>(`${this.urlBackend}/person/get-persons`);
  }

  addPersona(persona: any): Observable<any> {
    return this.http.post<any>(`${this.urlBackend}/person/add-person`, {
      nombre: persona.name,
      apellido: persona.apellido,
      email: persona.email,
    });
  }

  deletePersona(id: string): Observable<any> {
    return this.http.delete<any>(
      `${this.urlBackend}/person/delete-person/${id}`
    );
  }

  editPersonas(persona: any): Observable<any> {
    return this.http.put<any>(
      `${this.urlBackend}/person/update-person`,
      persona
    );
  }

  getPosts() {
    return this.http.get(
      'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts'
    );
  }
}
