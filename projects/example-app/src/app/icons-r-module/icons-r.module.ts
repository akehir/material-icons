import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsRComponent } from './icons-r.component';
import { MaterialIconsModule } from '@triangular/material-icons';

const routes: Routes = [
  { path: '', component: IconsRComponent }
];

@NgModule({
  declarations: [IconsRComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialIconsModule,
  ]
})
export class IconsRModule { }
