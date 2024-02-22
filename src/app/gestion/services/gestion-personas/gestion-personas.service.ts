import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GestionPersonasService {

  urlBack = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getAllPersonas() {
    return this.http.get<any>(`${this.urlBack}/person/get-persons`);
  }

  addPersona(persona: any): Observable<any> {
    return this.http.post<any>(`${this.urlBack}/person/add-person`, {
      nombre: persona.name,
      apellido: persona.apellido,
      email: persona.email,
    })
  }

  deletePersona(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlBack}/person/delete-person/${id}`);
  }

  editPersonas(persona: any): Observable<any> {
    return this.http.put<any>(`${this.urlBack}/person/update-person`, persona);
  }
}
