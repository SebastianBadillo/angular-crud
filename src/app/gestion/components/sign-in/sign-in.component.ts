import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  /**Emitir la persona registrada */
  @Output() private informacion: EventEmitter<any> = new EventEmitter<any>();
  persona: FormGroup;

  constructor(private fb: FormBuilder) {}
  /**life cicle functions */
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.persona = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  /**Functions */
  print(): void {
    if (this.persona.status == 'VALID') {
      // aqui se clona el objeto persona
      const clone = { ...this.persona.value };
      this.sendData(clone);
    } else {
      alert('Todos los campos deben ser diligenciados');
    }
  }
  clean(): void {
    this.persona.reset();
  }

  private sendData(clone: any) {
    this.informacion.emit(clone);
  }
}
