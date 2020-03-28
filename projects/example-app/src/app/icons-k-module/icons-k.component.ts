import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {materialIconIcKeyboard24Px,
  materialIconIcKeyboard48Px,
  materialIconIcKeyboardArrowDown24Px,
  materialIconIcKeyboardArrowDown48Px,
  materialIconIcKeyboardArrowLeft24Px,
  materialIconIcKeyboardArrowLeft48Px,
  materialIconIcKeyboardArrowRight24Px,
  materialIconIcKeyboardArrowRight48Px,
  materialIconIcKeyboardArrowUp24Px,
  materialIconIcKeyboardArrowUp48Px,
  materialIconIcKeyboardBackspace24Px,
  materialIconIcKeyboardBackspace48Px,
  materialIconIcKeyboardCapslock24Px,
  materialIconIcKeyboardCapslock48Px,
  materialIconIcKeyboardHide24Px,
  materialIconIcKeyboardHide48Px,
  materialIconIcKeyboardReturn24Px,
  materialIconIcKeyboardReturn48Px,
  materialIconIcKeyboardTab24Px,
  materialIconIcKeyboardTab48Px,
  materialIconIcKeyboardVoice24Px,
  materialIconIcKeyboardVoice48Px,
  materialIconIcKitchen24Px,
  materialIconIcKitchen48Px,

} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-k',
  templateUrl: './icons-k.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsKComponent {
  icons = [
    materialIconIcKeyboard24Px,
    materialIconIcKeyboard48Px,
    materialIconIcKeyboardArrowDown24Px,
    materialIconIcKeyboardArrowDown48Px,
    materialIconIcKeyboardArrowLeft24Px,
    materialIconIcKeyboardArrowLeft48Px,
    materialIconIcKeyboardArrowRight24Px,
    materialIconIcKeyboardArrowRight48Px,
    materialIconIcKeyboardArrowUp24Px,
    materialIconIcKeyboardArrowUp48Px,
    materialIconIcKeyboardBackspace24Px,
    materialIconIcKeyboardBackspace48Px,
    materialIconIcKeyboardCapslock24Px,
    materialIconIcKeyboardCapslock48Px,
    materialIconIcKeyboardHide24Px,
    materialIconIcKeyboardHide48Px,
    materialIconIcKeyboardReturn24Px,
    materialIconIcKeyboardReturn48Px,
    materialIconIcKeyboardTab24Px,
    materialIconIcKeyboardTab48Px,
    materialIconIcKeyboardVoice24Px,
    materialIconIcKeyboardVoice48Px,
    materialIconIcKitchen24Px,
    materialIconIcKitchen48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
