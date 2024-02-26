import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditarComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.buildForm();
    this.form.patchValue(this.data);
  }

  private buildForm(): void {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
    });
  }

  closePopUp() {
    const clone = this.form.value;
    if (this.form.valid) {
      this.ref.close(clone);
    } else {
      alert('Todos los campos deben ser diligenciados');
    }
  }
  clean() {
    this.form.reset();
  }
}
