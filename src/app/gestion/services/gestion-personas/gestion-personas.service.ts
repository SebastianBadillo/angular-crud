import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GestionPersonasService {
  constructor(private http: HttpClient) {}

  getAllPersonas() {
    return JSON.parse(localStorage.getItem('personas') || '[]');
  }

  addPersona(persona: any) {
    const personas = this.getAllPersonas();
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));
    return personas;
  }

  deletePersona(id: string) {
    const personas = this.getAllPersonas();
    const newPersonas = personas.filter((persona: any) => persona.id !== id);
    localStorage.setItem('personas', JSON.stringify(newPersonas));
    return newPersonas;
  }

  editPersonas() {
    const personas = this.getAllPersonas();
    localStorage.setItem('personas', JSON.stringify(personas));
    return personas;
  }

  getPosts() {
    return this.http.get('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts');
  }
}
