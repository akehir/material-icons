import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcWallpaper18Px,
  materialIconIcWallpaper24Px,
  materialIconIcWallpaper48Px,
  materialIconIcWarning18Px,
  materialIconIcWarning24Px,
  materialIconIcWarning36Px,
  materialIconIcWarning48Px,
  materialIconIcWatch24Px,
  materialIconIcWatch48Px,
  materialIconIcWatchLater24Px,
  materialIconIcWatchLater48Px,
  materialIconIcWbAuto24Px,
  materialIconIcWbAuto48Px,
  materialIconIcWbCloudy24Px,
  materialIconIcWbCloudy48Px,
  materialIconIcWbIncandescent24Px,
  materialIconIcWbIncandescent48Px,
  materialIconIcWbIridescent24Px,
  materialIconIcWbIridescent48Px,
  materialIconIcWbSunny24Px,
  materialIconIcWbSunny48Px,
  materialIconIcWc24Px,
  materialIconIcWc48Px,
  materialIconIcWeb24Px,
  materialIconIcWeb48Px,
  materialIconIcWebAsset24Px,
  materialIconIcWebAsset48Px,
  materialIconIcWeekend24Px,
  materialIconIcWeekend48Px,
  materialIconIcWhatshot18Px,
  materialIconIcWhatshot24Px,
  materialIconIcWhatshot48Px,
  materialIconIcWidgets18Px,
  materialIconIcWidgets24Px,
  materialIconIcWidgets48Px,
  materialIconIcWifi24Px,
  materialIconIcWifi48Px,
  materialIconIcWifiLock24Px,
  materialIconIcWifiLock48Px,
  materialIconIcWifiTethering24Px,
  materialIconIcWifiTethering48Px,
  materialIconIcWork24Px,
  materialIconIcWork48Px,
  materialIconIcWrapText18Px,
  materialIconIcWrapText24Px,
  materialIconIcWrapText48Px,
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-w',
  templateUrl: './icons-w.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsWComponent {
  icons = [
    materialIconIcWallpaper18Px,
    materialIconIcWallpaper24Px,
    materialIconIcWallpaper48Px,
    materialIconIcWarning18Px,
    materialIconIcWarning24Px,
    materialIconIcWarning36Px,
    materialIconIcWarning48Px,
    materialIconIcWatch24Px,
    materialIconIcWatch48Px,
    materialIconIcWatchLater24Px,
    materialIconIcWatchLater48Px,
    materialIconIcWbAuto24Px,
    materialIconIcWbAuto48Px,
    materialIconIcWbCloudy24Px,
    materialIconIcWbCloudy48Px,
    materialIconIcWbIncandescent24Px,
    materialIconIcWbIncandescent48Px,
    materialIconIcWbIridescent24Px,
    materialIconIcWbIridescent48Px,
    materialIconIcWbSunny24Px,
    materialIconIcWbSunny48Px,
    materialIconIcWc24Px,
    materialIconIcWc48Px,
    materialIconIcWeb24Px,
    materialIconIcWeb48Px,
    materialIconIcWebAsset24Px,
    materialIconIcWebAsset48Px,
    materialIconIcWeekend24Px,
    materialIconIcWeekend48Px,
    materialIconIcWhatshot18Px,
    materialIconIcWhatshot24Px,
    materialIconIcWhatshot48Px,
    materialIconIcWidgets18Px,
    materialIconIcWidgets24Px,
    materialIconIcWidgets48Px,
    materialIconIcWifi24Px,
    materialIconIcWifi48Px,
    materialIconIcWifiLock24Px,
    materialIconIcWifiLock48Px,
    materialIconIcWifiTethering24Px,
    materialIconIcWifiTethering48Px,
    materialIconIcWork24Px,
    materialIconIcWork48Px,
    materialIconIcWrapText18Px,
    materialIconIcWrapText24Px,
    materialIconIcWrapText48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
