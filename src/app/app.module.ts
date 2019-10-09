import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModulesModule} from './material-modules/material-modules.module';

import { ValidaDatePickerComponent } from './componentes/valida-date-picker/valida-date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidaDatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
