import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialIconsModule } from '@triangular/material-icons';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    ReactiveFormsModule,
    MaterialIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
