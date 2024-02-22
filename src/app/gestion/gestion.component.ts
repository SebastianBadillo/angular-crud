import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GestionPersonasService } from './services/gestion-personas/gestion-personas.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from './components/editar/editar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
})
export class GestionComponent implements OnInit {
  /*Variables */
  personas: any[] = [];
  numero: string | null = '';
  @ViewChild('register') registerComponent: SignInComponent =
    new SignInComponent();

  constructor(
    private gestionPersonasService: GestionPersonasService,
    private matDialog: MatDialog
  ) {}
  /**life cicle functions */
  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons() {
    this.gestionPersonasService.getAllPersonas().subscribe({
      next: (data) => {
        this.personas = data.map((item: any) => {
          return {
            id: item.id,
            name: item.nombre,
            apellido: item.apellido,
            email: item.email,
          };
        });
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  add_persona(persona: any) {
    this.gestionPersonasService.addPersona(persona).subscribe({
      next: (data) => {
        const clone = { ...data, name: data.nombre };
        this.personas.push(clone);
        this.registerComponent.clean();
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  delete_persona(personaTable: any) {
    this.gestionPersonasService.deletePersona(personaTable.id).subscribe({
      next: () => {
        this.personas = this.personas.filter(
          (item) => item.id != personaTable.id
        );
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
  edit_persona(personaTable: any) {
    var popUp = this.matDialog.open(EditarComponent, {
      width: '450px',
      data: {
        id: personaTable.id,
        nombre: personaTable.name,
        apellido: personaTable.apellido,
        email: personaTable.email,
      },
    });
    popUp.afterClosed().subscribe((item) => {
      this.gestionPersonasService.editPersonas(item).subscribe({
        next: (data) => {
          this.personas = this.personas.map((item) => {
            if (item.id == personaTable.id) {
              return {
                id: item.id,
                name: data.nombre,
                apellido: data.apellido,
                email: data.email,
              };
            } else {
              return item;
            }
          });
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    });
  }
}
