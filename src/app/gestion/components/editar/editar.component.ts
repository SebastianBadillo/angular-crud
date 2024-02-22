import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  personaEditada: any = {
    nombre: '',
    apellido: '',
    email: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditarComponent>
  ) {}
  ngOnInit() {
    this.personaEditada = this.data;
  }

  closePopUp() {
    const clone = { ...this.personaEditada };
    this.clean();
    this.ref.close(clone);
  }
  clean() {
    this.personaEditada.nombre = '';
    this.personaEditada.apellido = '';
    this.personaEditada.email = '';
  }
}
