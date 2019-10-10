import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-valida-date-picker',
  templateUrl: './valida-date-picker.component.html',
  styleUrls: ['./valida-date-picker.component.css']
})
export class ValidaDatePickerComponent implements OnInit {

  prueba: FormGroup;
  startDate = new Date(1900, 1, 1);
  endDate = new Date();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.startDate = new Date(1900, 1, 1);
  this.endDate = new Date();
    this.prueba  = this.fb.group({
      rSexo: ['', [
        Validators.required
      ]],
      rFechaNacimiento: ['', [
        Validators.required
      ]]
    });
console.log();

  }

  
  get rFechaNacimiento() {      return this.prueba.get('rFechaNacimiento'); }

  formularioEnviar(datos: any) {console.log(datos);
  }

}
