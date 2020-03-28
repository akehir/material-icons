import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcYoutubeSearchedFor24Px,
  materialIconIcYoutubeSearchedFor48Px,
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-y',
  templateUrl: './icons-y.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsYComponent {
  icons = [
    materialIconIcYoutubeSearchedFor24Px,
    materialIconIcYoutubeSearchedFor48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
