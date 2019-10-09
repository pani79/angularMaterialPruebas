import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidaDatePickerComponent } from './componentes/valida-date-picker/valida-date-picker.component'


const routes: Routes = [
  { path: 'validarDatePicker', component: ValidaDatePickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
