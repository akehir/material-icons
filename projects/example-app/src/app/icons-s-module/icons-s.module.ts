import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsSComponent } from './icons-s.component';
import { MaterialIconsModule } from '@triangular/material-icons';

const routes: Routes = [
  { path: '', component: IconsSComponent }
];

@NgModule({
  declarations: [IconsSComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialIconsModule,
  ]
})
export class IconsSModule { }
