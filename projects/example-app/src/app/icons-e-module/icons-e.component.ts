import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcEdit24Px,
  materialIconIcEdit48Px,
  materialIconIcEditLocation24Px,
  materialIconIcEditLocation48Px,
  materialIconIcEject24Px,
  materialIconIcEmail24Px,
  materialIconIcEmail48Px,
  materialIconIcEnhancedEncryption24Px,
  materialIconIcEnhancedEncryption48Px,
  materialIconIcEqualizer24Px,
  materialIconIcEqualizer48Px,
  materialIconIcError18Px,
  materialIconIcError24Px,
  materialIconIcError36Px,
  materialIconIcError48Px,
  materialIconIcErrorOutline24Px,
  materialIconIcErrorOutline48Px,
  materialIconIcEuroSymbol24Px,
  materialIconIcEuroSymbol48Px,
  materialIconIcEvStation24Px,
  materialIconIcEvStation48Px,
  materialIconIcEvent18Px,
  materialIconIcEvent24Px,
  materialIconIcEvent48Px,
  materialIconIcEventAvailable24Px,
  materialIconIcEventAvailable48Px,
  materialIconIcEventBusy24Px,
  materialIconIcEventBusy48Px,
  materialIconIcEventNote18Px,
  materialIconIcEventNote24Px,
  materialIconIcEventNote48Px,
  materialIconIcEventSeat24Px,
  materialIconIcEventSeat48Px,
  materialIconIcExitToApp24Px,
  materialIconIcExitToApp48Px,
  materialIconIcExpandLess18Px,
  materialIconIcExpandLess24Px,
  materialIconIcExpandLess36Px,
  materialIconIcExpandLess48Px,
  materialIconIcExpandMore18Px,
  materialIconIcExpandMore24Px,
  materialIconIcExpandMore36Px,
  materialIconIcExpandMore48Px,
  materialIconIcExplicit24Px,
  materialIconIcExplicit48Px,
  materialIconIcExplore24Px,
  materialIconIcExplore48Px,
  materialIconIcExposure24Px,
  materialIconIcExposure48Px,
  materialIconIcExposureNeg124Px,
  materialIconIcExposureNeg148Px,
  materialIconIcExposureNeg224Px,
  materialIconIcExposureNeg248Px,
  materialIconIcExposurePlus124Px,
  materialIconIcExposurePlus148Px,
  materialIconIcExposurePlus224Px,
  materialIconIcExposurePlus248Px,
  materialIconIcExposureZero24Px,
  materialIconIcExposureZero48Px,
  materialIconIcExtension24Px,
  materialIconIcExtension48Px,
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-e',
  templateUrl: './icons-e.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsEComponent {
  icons = [
    materialIconIcEdit24Px,
    materialIconIcEdit48Px,
    materialIconIcEditLocation24Px,
    materialIconIcEditLocation48Px,
    materialIconIcEject24Px,
    materialIconIcEmail24Px,
    materialIconIcEmail48Px,
    materialIconIcEnhancedEncryption24Px,
    materialIconIcEnhancedEncryption48Px,
    materialIconIcEqualizer24Px,
    materialIconIcEqualizer48Px,
    materialIconIcError18Px,
    materialIconIcError24Px,
    materialIconIcError36Px,
    materialIconIcError48Px,
    materialIconIcErrorOutline24Px,
    materialIconIcErrorOutline48Px,
    materialIconIcEuroSymbol24Px,
    materialIconIcEuroSymbol48Px,
    materialIconIcEvStation24Px,
    materialIconIcEvStation48Px,
    materialIconIcEvent18Px,
    materialIconIcEvent24Px,
    materialIconIcEvent48Px,
    materialIconIcEventAvailable24Px,
    materialIconIcEventAvailable48Px,
    materialIconIcEventBusy24Px,
    materialIconIcEventBusy48Px,
    materialIconIcEventNote18Px,
    materialIconIcEventNote24Px,
    materialIconIcEventNote48Px,
    materialIconIcEventSeat24Px,
    materialIconIcEventSeat48Px,
    materialIconIcExitToApp24Px,
    materialIconIcExitToApp48Px,
    materialIconIcExpandLess18Px,
    materialIconIcExpandLess24Px,
    materialIconIcExpandLess36Px,
    materialIconIcExpandLess48Px,
    materialIconIcExpandMore18Px,
    materialIconIcExpandMore24Px,
    materialIconIcExpandMore36Px,
    materialIconIcExpandMore48Px,
    materialIconIcExplicit24Px,
    materialIconIcExplicit48Px,
    materialIconIcExplore24Px,
    materialIconIcExplore48Px,
    materialIconIcExposure24Px,
    materialIconIcExposure48Px,
    materialIconIcExposureNeg124Px,
    materialIconIcExposureNeg148Px,
    materialIconIcExposureNeg224Px,
    materialIconIcExposureNeg248Px,
    materialIconIcExposurePlus124Px,
    materialIconIcExposurePlus148Px,
    materialIconIcExposurePlus224Px,
    materialIconIcExposurePlus248Px,
    materialIconIcExposureZero24Px,
    materialIconIcExposureZero48Px,
    materialIconIcExtension24Px,
    materialIconIcExtension48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
