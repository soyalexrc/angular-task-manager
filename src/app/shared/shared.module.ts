import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SamplePipe } from './pipes/sample.pipe';
import { SampleDirective } from './directives/sample.directive';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    SamplePipe,
    SampleDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
