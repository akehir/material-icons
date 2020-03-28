import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {

} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-j',
  templateUrl: './icons-j.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsJComponent {
  icons = [

  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
