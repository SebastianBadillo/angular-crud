import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  // persona: any = {
  //   name: '',
  //   apellido: '',
  //   email: '',
  // };
  persona: FormGroup | any;
  /**life cicle functions */
  ngOnInit() {
    this.persona = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }
  constructor() {}
  /**Functions */
  print(): void {
    if (this.persona.status == 'VALID') {
      const clone = { ...this.persona.value };
      clone.id = new Date().getMilliseconds();
      this.sendData(clone);
      this.clean();
    } else {
      alert('Todos los campos deben ser diligenciados');
    }
  }
  clean(): void {
    this.persona.reset();
  }

  sendData(clone: any) {
    this.informacion.emit(clone);
  }
}
