import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gestionar-personas',
    pathMatch: 'full'
  },
  {
    path: 'gestionar-personas',
    loadChildren: () =>
      import('./gestion/gestion.module').then((m) => m.GestionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
