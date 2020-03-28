export const ngModule = `import { NgModule } from '@angular/core';
import { MaterialIconsModule } from '@triangular/material-icons';

@NgModule({
    declarations: [
    ],
    imports: [
      MaterialIconsModule,
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule { }
`;

export const component = `import { Component } from '@angular/core';
import { MaterialIconsRegistry } from '@triangular/material-icons';
import {
  materialIconAnkh,
  // add more icons here
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-some-component-with-icons',
  template: '<material-icon name="ankh"></material-icon>',
  styles: 'svg { color: #ccc; fill: currentColor; width: 5rem; height: 5rem; }',
})
export class SomeComponentWithIcons {

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons([
      materialIconAnkh,
      // add more icons here
    ]);
  }
}`;

export const usage = `<material-icon name="ankh"></material-icon>`;
