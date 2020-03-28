import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsJComponent } from './icons-j.component';
import { MaterialIconsModule } from '@triangular/material-icons';

const routes: Routes = [
  { path: '', component: IconsJComponent }
];

@NgModule({
  declarations: [IconsJComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialIconsModule,
  ]
})
export class IconsJModule { }
