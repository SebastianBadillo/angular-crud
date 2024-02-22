import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  /**Variables */
  @Output()
  informacion: EventEmitter<any> =
    new EventEmitter<any>(); /**Emitir la persona registrada */
  persona: any = {
    name: '',
    apellido: '',
    email: '',
  };
  /**life cicle functions */
  ngOnInit() {}
  constructor() {}
  /**Functions */
  print(): void {
    if (this.persona.name && this.persona.apellido && this.persona.email) {
      const clone = { ...this.persona };
      clone.id = new Date().getMilliseconds();
      this.sendData(clone);
      this.clean();
    } else {
      alert('Todos los campos deben ser diligenciados');
    }
  }
  clean(): void {
    this.persona.name = '';
    this.persona.apellido = '';
    this.persona.email = '';
  }

  sendData(clone: any) {
    this.informacion.emit(clone);
  }
}
