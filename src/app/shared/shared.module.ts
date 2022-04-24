import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './components/color-picker.component';
import { ErrorComponent } from './components/error.component';



@NgModule({
  declarations: [
    ColorPickerComponent,
    ErrorComponent,
  ],
  exports: [
    ColorPickerComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
