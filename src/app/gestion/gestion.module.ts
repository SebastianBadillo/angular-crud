import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionRoutingModule } from './gestion-routing.module';
import { EditarComponent } from './components/editar/editar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GestionPersonasService } from './services/gestion-personas/gestion-personas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GestionRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  /**In the declarations, we type the components we need to use */
  declarations: [
    GestionComponent,
    TableComponent,
    SignInComponent,
    EditarComponent,
  ],
  providers: [GestionPersonasService],
})
export class GestionModule {}
