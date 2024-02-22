import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  /**Variables */
  @Output() private informacion: EventEmitter<any> =
    new EventEmitter<any>(); /**Emitir la persona registrada */
  protected persona: any = {
    name: '',
    apellido: '',
    email: '',
  };
  /**life cicle functions */
  ngOnInit() {}
  constructor() {}
  /**Functions */
  protected print(): void {
    if (this.persona.name && this.persona.apellido && this.persona.email) {
      const clone = { ...this.persona };
      this.sendData(clone);
    } else {
      alert('Todos los campos deben ser diligenciados');
    }
  }
  public clean(): void {
    this.persona.name = '';
    this.persona.apellido = '';
    this.persona.email = '';
  }

  private sendData(clone: any) {
    this.informacion.emit(clone);
  }
}
