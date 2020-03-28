import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcOfflinePin24Px,
  materialIconIcOndemandVideo24Px,
  materialIconIcOndemandVideo48Px,
  materialIconIcOpacity24Px,
  materialIconIcOpacity48Px,
  materialIconIcOpenInBrowser24Px,
  materialIconIcOpenInBrowser48Px,
  materialIconIcOpenInNew24Px,
  materialIconIcOpenInNew48Px,
  materialIconIcOpenWith24Px,
  materialIconIcOpenWith48Px,
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-o',
  templateUrl: './icons-o.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsOComponent {
  icons = [
    materialIconIcOfflinePin24Px,
    materialIconIcOndemandVideo24Px,
    materialIconIcOndemandVideo48Px,
    materialIconIcOpacity24Px,
    materialIconIcOpacity48Px,
    materialIconIcOpenInBrowser24Px,
    materialIconIcOpenInBrowser48Px,
    materialIconIcOpenInNew24Px,
    materialIconIcOpenInNew48Px,
    materialIconIcOpenWith24Px,
    materialIconIcOpenWith48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
