import { NgModule } from '@angular/core';

import {
  MatProgressSpinnerModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
 } from "@angular/material";

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule {

}
