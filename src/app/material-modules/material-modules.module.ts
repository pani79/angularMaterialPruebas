import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

const Materialcomponents = [
  MatNativeDateModule,
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatIconModule,
  MatRadioModule
];

@NgModule({
  declarations: [],
  imports: [
    Materialcomponents
  ],
  exports: [
    Materialcomponents
  ]
})
export class MaterialModulesModule { }
