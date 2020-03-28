import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcUnarchive24Px,
  materialIconIcUnarchive48Px,
  materialIconIcUndo24Px,
  materialIconIcUndo48Px,
  materialIconIcUnfoldLess18Px,
  materialIconIcUnfoldLess24Px,
  materialIconIcUnfoldLess36Px,
  materialIconIcUnfoldLess48Px,
  materialIconIcUnfoldMore18Px,
  materialIconIcUnfoldMore24Px,
  materialIconIcUnfoldMore36Px,
  materialIconIcUnfoldMore48Px,
  materialIconIcUpdate24Px,
  materialIconIcUpdate48Px,
  materialIconIcUsb18Px,
  materialIconIcUsb24Px,
  materialIconIcUsb48Px,
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-u',
  templateUrl: './icons-u.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsUComponent {
  icons = [
    materialIconIcUnarchive24Px,
    materialIconIcUnarchive48Px,
    materialIconIcUndo24Px,
    materialIconIcUndo48Px,
    materialIconIcUnfoldLess18Px,
    materialIconIcUnfoldLess24Px,
    materialIconIcUnfoldLess36Px,
    materialIconIcUnfoldLess48Px,
    materialIconIcUnfoldMore18Px,
    materialIconIcUnfoldMore24Px,
    materialIconIcUnfoldMore36Px,
    materialIconIcUnfoldMore48Px,
    materialIconIcUpdate24Px,
    materialIconIcUpdate48Px,
    materialIconIcUsb18Px,
    materialIconIcUsb24Px,
    materialIconIcUsb48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
