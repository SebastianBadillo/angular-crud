import { Component, OnInit } from '@angular/core';
import { GestionPersonasService } from './services/gestion-personas/gestion-personas.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from './components/editar/editar.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
})
export class GestionComponent implements OnInit {
  /*Variables */
  personas: any[] = [];
  numero: string | null = '';
  constructor(
    private gestionPersonasService: GestionPersonasService,
    private matDialog: MatDialog
  ) {}
  /**life cicle functions */
  ngOnInit() {
    this.personas = this.gestionPersonasService.getAllPersonas();
    this.gestionPersonasService.getPosts().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /** Functions*/

  add_persona(persona: any) {
    this.personas = this.gestionPersonasService.addPersona(persona);
  }

  delete_persona(personaTable: any) {
    this.personas = this.gestionPersonasService.deletePersona(personaTable.id);
  }
  edit_persona(personaTable: any) {
    var popUp = this.matDialog.open(EditarComponent, {
      width: '450px',
      data: {
        nombre: personaTable.name,
        apellido: personaTable.apellido,
        email: personaTable.email,
      },
    });
    popUp.afterClosed().subscribe((item) => {
      // cambiar el item dentro del arreglo personas
      if (item != undefined && item != '') {
        for (const persona of this.personas) {
          if (persona.id == personaTable.id) {
            persona.name = item.nombre;
            persona.apellido = item.apellido;
            persona.email = item.email;
            break;
          }
        }
      }
    });
  }
}
