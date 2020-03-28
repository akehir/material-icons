import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsKComponent } from './icons-k.component';
import { MaterialIconsModule } from '@triangular/material-icons';

const routes: Routes = [
  { path: '', component: IconsKComponent }
];

@NgModule({
  declarations: [IconsKComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialIconsModule,
  ]
})
export class IconsKModule { }
