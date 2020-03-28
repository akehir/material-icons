import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcQueryBuilder24Px,
  materialIconIcQueryBuilder48Px,
  materialIconIcQuestionAnswer24Px,
  materialIconIcQuestionAnswer48Px,
  materialIconIcQueue24Px,
  materialIconIcQueue48Px,
  materialIconIcQueueMusic24Px,
  materialIconIcQueueMusic48Px,
  materialIconIcQueuePlayNext24Px,
  materialIconIcQueuePlayNext48Px,
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-q',
  templateUrl: './icons-q.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsQComponent {
  icons = [
    materialIconIcQueryBuilder24Px,
    materialIconIcQueryBuilder48Px,
    materialIconIcQuestionAnswer24Px,
    materialIconIcQuestionAnswer48Px,
    materialIconIcQueue24Px,
    materialIconIcQueue48Px,
    materialIconIcQueueMusic24Px,
    materialIconIcQueueMusic48Px,
    materialIconIcQueuePlayNext24Px,
    materialIconIcQueuePlayNext48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
