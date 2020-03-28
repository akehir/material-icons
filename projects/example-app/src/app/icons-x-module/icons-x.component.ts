import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {

} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-x',
  templateUrl: './icons-x.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsXComponent {
  icons = [

  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
