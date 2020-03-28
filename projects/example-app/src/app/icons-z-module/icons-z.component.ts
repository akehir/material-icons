import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcZoomIn24Px,
  materialIconIcZoomOut24Px,
  materialIconIcZoomOutMap24Px,
  materialIconIcZoomOutMap48Px,

} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-z',
  templateUrl: './icons-z.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsZComponent {
  icons = [
    materialIconIcZoomIn24Px,
    materialIconIcZoomOut24Px,
    materialIconIcZoomOutMap24Px,
    materialIconIcZoomOutMap48Px,

  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
