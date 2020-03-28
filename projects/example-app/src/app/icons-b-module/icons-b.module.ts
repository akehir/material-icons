import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsBComponent } from './icons-b.component';
import { MaterialIconsModule } from '@triangular/material-icons';

const routes: Routes = [
  { path: '', component: IconsBComponent }
];

@NgModule({
  declarations: [IconsBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialIconsModule,
  ]
})
export class IconsBModule { }
