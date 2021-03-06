import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialIconsRegistry, } from '@triangular/material-icons';

import {
  materialIconIcSatellite24Px,
  materialIconIcSatellite48Px,
  materialIconIcSave24Px,
  materialIconIcSave48Px,
  materialIconIcScanner24Px,
  materialIconIcScanner48Px,
  materialIconIcSchedule24Px,
  materialIconIcSchedule48Px,
  materialIconIcSchool24Px,
  materialIconIcSchool48Px,
  materialIconIcScreenLockLandscape24Px,
  materialIconIcScreenLockLandscape48Px,
  materialIconIcScreenLockPortrait24Px,
  materialIconIcScreenLockPortrait48Px,
  materialIconIcScreenLockRotation24Px,
  materialIconIcScreenLockRotation48Px,
  materialIconIcScreenRotation24Px,
  materialIconIcScreenRotation48Px,
  materialIconIcScreenShare24Px,
  materialIconIcScreenShare48Px,
  materialIconIcSdCard24Px,
  materialIconIcSdCard48Px,
  materialIconIcSdStorage24Px,
  materialIconIcSdStorage48Px,
  materialIconIcSearch24Px,
  materialIconIcSearch48Px,
  materialIconIcSecurity24Px,
  materialIconIcSecurity48Px,
  materialIconIcSelectAll24Px,
  materialIconIcSelectAll48Px,
  materialIconIcSend24Px,
  materialIconIcSend48Px,
  materialIconIcSentimentDissatisfied24Px,
  materialIconIcSentimentDissatisfied48Px,
  materialIconIcSentimentNeutral24Px,
  materialIconIcSentimentNeutral48Px,
  materialIconIcSentimentSatisfied24Px,
  materialIconIcSentimentSatisfied48Px,
  materialIconIcSentimentVeryDissatisfied24Px,
  materialIconIcSentimentVeryDissatisfied48Px,
  materialIconIcSentimentVerySatisfied24Px,
  materialIconIcSentimentVerySatisfied48Px,
  materialIconIcSettings24Px,
  materialIconIcSettings48Px,
  materialIconIcSettingsApplications24Px,
  materialIconIcSettingsApplications48Px,
  materialIconIcSettingsBackupRestore24Px,
  materialIconIcSettingsBackupRestore48Px,
  materialIconIcSettingsBluetooth24Px,
  materialIconIcSettingsBluetooth48Px,
  materialIconIcSettingsBrightness24Px,
  materialIconIcSettingsBrightness48Px,
  materialIconIcSettingsCell24Px,
  materialIconIcSettingsCell48Px,
  materialIconIcSettingsEthernet24Px,
  materialIconIcSettingsEthernet48Px,
  materialIconIcSettingsInputAntenna24Px,
  materialIconIcSettingsInputAntenna48Px,
  materialIconIcSettingsInputComponent24Px,
  materialIconIcSettingsInputComponent48Px,
  materialIconIcSettingsInputComposite24Px,
  materialIconIcSettingsInputComposite48Px,
  materialIconIcSettingsInputHdmi24Px,
  materialIconIcSettingsInputHdmi48Px,
  materialIconIcSettingsInputSvideo24Px,
  materialIconIcSettingsInputSvideo48Px,
  materialIconIcSettingsOverscan24Px,
  materialIconIcSettingsOverscan48Px,
  materialIconIcSettingsPhone24Px,
  materialIconIcSettingsPhone48Px,
  materialIconIcSettingsPower24Px,
  materialIconIcSettingsPower48Px,
  materialIconIcSettingsRemote24Px,
  materialIconIcSettingsRemote48Px,
  materialIconIcSettingsSystemDaydream24Px,
  materialIconIcSettingsSystemDaydream48Px,
  materialIconIcSettingsVoice24Px,
  materialIconIcSettingsVoice48Px,
  materialIconIcShare24Px,
  materialIconIcShare48Px,
  materialIconIcShop24Px,
  materialIconIcShop48Px,
  materialIconIcShopTwo24Px,
  materialIconIcShopTwo48Px,
  materialIconIcShoppingBasket24Px,
  materialIconIcShoppingBasket48Px,
  materialIconIcShoppingCart24Px,
  materialIconIcShoppingCart48Px,
  materialIconIcShortText24Px,
  materialIconIcShortText48Px,
  materialIconIcShowChart24Px,
  materialIconIcShowChart48Px,
  materialIconIcShuffle24Px,
  materialIconIcShuffle48Px,
  materialIconIcSignalCellular0Bar18Px,
  materialIconIcSignalCellular0Bar24Px,
  materialIconIcSignalCellular0Bar48Px,
  materialIconIcSignalCellular1Bar18Px,
  materialIconIcSignalCellular1Bar24Px,
  materialIconIcSignalCellular1Bar48Px,
  materialIconIcSignalCellular2Bar18Px,
  materialIconIcSignalCellular2Bar24Px,
  materialIconIcSignalCellular2Bar48Px,
  materialIconIcSignalCellular3Bar18Px,
  materialIconIcSignalCellular3Bar24Px,
  materialIconIcSignalCellular3Bar48Px,
  materialIconIcSignalCellular4Bar18Px,
  materialIconIcSignalCellular4Bar24Px,
  materialIconIcSignalCellular4Bar48Px,
  materialIconIcSignalCellularConnectedNoInternet0Bar18Px,
  materialIconIcSignalCellularConnectedNoInternet0Bar24Px,
  materialIconIcSignalCellularConnectedNoInternet0Bar48Px,
  materialIconIcSignalCellularConnectedNoInternet1Bar18Px,
  materialIconIcSignalCellularConnectedNoInternet1Bar24Px,
  materialIconIcSignalCellularConnectedNoInternet1Bar48Px,
  materialIconIcSignalCellularConnectedNoInternet2Bar18Px,
  materialIconIcSignalCellularConnectedNoInternet2Bar24Px,
  materialIconIcSignalCellularConnectedNoInternet2Bar48Px,
  materialIconIcSignalCellularConnectedNoInternet3Bar18Px,
  materialIconIcSignalCellularConnectedNoInternet3Bar24Px,
  materialIconIcSignalCellularConnectedNoInternet3Bar48Px,
  materialIconIcSignalCellularConnectedNoInternet4Bar18Px,
  materialIconIcSignalCellularConnectedNoInternet4Bar24Px,
  materialIconIcSignalCellularConnectedNoInternet4Bar48Px,
  materialIconIcSignalCellularNoSim24Px,
  materialIconIcSignalCellularNoSim48Px,
  materialIconIcSignalCellularNull18Px,
  materialIconIcSignalCellularNull24Px,
  materialIconIcSignalCellularNull48Px,
  materialIconIcSignalCellularOff18Px,
  materialIconIcSignalCellularOff24Px,
  materialIconIcSignalCellularOff48Px,
  materialIconIcSignalWifi0Bar18Px,
  materialIconIcSignalWifi0Bar24Px,
  materialIconIcSignalWifi0Bar48Px,
  materialIconIcSignalWifi1Bar18Px,
  materialIconIcSignalWifi1Bar24Px,
  materialIconIcSignalWifi1Bar48Px,
  materialIconIcSignalWifi1BarLock24Px,
  materialIconIcSignalWifi1BarLock48Px,
  materialIconIcSignalWifi2Bar18Px,
  materialIconIcSignalWifi2Bar24Px,
  materialIconIcSignalWifi2Bar48Px,
  materialIconIcSignalWifi2BarLock24Px,
  materialIconIcSignalWifi2BarLock48Px,
  materialIconIcSignalWifi3Bar18Px,
  materialIconIcSignalWifi3Bar24Px,
  materialIconIcSignalWifi3Bar48Px,
  materialIconIcSignalWifi3BarLock24Px,
  materialIconIcSignalWifi3BarLock48Px,
  materialIconIcSignalWifi4Bar18Px,
  materialIconIcSignalWifi4Bar24Px,
  materialIconIcSignalWifi4Bar48Px,
  materialIconIcSignalWifi4BarLock24Px,
  materialIconIcSignalWifi4BarLock48Px,
  materialIconIcSignalWifiOff18Px,
  materialIconIcSignalWifiOff24Px,
  materialIconIcSignalWifiOff48Px,
  materialIconIcSignalWifiStatusbar1Bar26X24Px,
  materialIconIcSignalWifiStatusbar2Bar26X24Px,
  materialIconIcSignalWifiStatusbar3Bar26X24Px,
  materialIconIcSignalWifiStatusbar4Bar26X24Px,
  materialIconIcSignalWifiStatusbarConnectedNoInternet126X24Px,
  materialIconIcSignalWifiStatusbarConnectedNoInternet26X24Px,
  materialIconIcSignalWifiStatusbarConnectedNoInternet226X24Px,
  materialIconIcSignalWifiStatusbarConnectedNoInternet326X24Px,
  materialIconIcSignalWifiStatusbarConnectedNoInternet426X24Px,
  materialIconIcSignalWifiStatusbarNotConnected26X24Px,
  materialIconIcSignalWifiStatusbarNull26X24Px,
  materialIconIcSimCard24Px,
  materialIconIcSimCard48Px,
  materialIconIcSimCardAlert24Px,
  materialIconIcSimCardAlert48Px,
  materialIconIcSkipNext24Px,
  materialIconIcSkipNext48Px,
  materialIconIcSkipPrevious24Px,
  materialIconIcSkipPrevious48Px,
  materialIconIcSlideshow24Px,
  materialIconIcSlideshow48Px,
  materialIconIcSlowMotionVideo24Px,
  materialIconIcSlowMotionVideo48Px,
  materialIconIcSmartphone24Px,
  materialIconIcSmartphone48Px,
  materialIconIcSmokeFree24Px,
  materialIconIcSmokeFree48Px,
  materialIconIcSmokingRooms24Px,
  materialIconIcSmokingRooms48Px,
  materialIconIcSms24Px,
  materialIconIcSms48Px,
  materialIconIcSmsFailed24Px,
  materialIconIcSmsFailed48Px,
  materialIconIcSnooze24Px,
  materialIconIcSnooze48Px,
  materialIconIcSort24Px,
  materialIconIcSort48Px,
  materialIconIcSortByAlpha24Px,
  materialIconIcSpa24Px,
  materialIconIcSpa48Px,
  materialIconIcSpaceBar24Px,
  materialIconIcSpaceBar48Px,
  materialIconIcSpeaker24Px,
  materialIconIcSpeaker48Px,
  materialIconIcSpeakerGroup24Px,
  materialIconIcSpeakerGroup48Px,
  materialIconIcSpeakerNotes24Px,
  materialIconIcSpeakerNotes48Px,
  materialIconIcSpeakerNotesOff24Px,
  materialIconIcSpeakerNotesOff48Px,
  materialIconIcSpeakerPhone24Px,
  materialIconIcSpeakerPhone48Px,
  materialIconIcSpellcheck24Px,
  materialIconIcSpellcheck48Px,
  materialIconIcStar24Px,
  materialIconIcStarBorder24Px,
  materialIconIcStarHalf24Px,
  materialIconIcStarHalf48Px,
  materialIconIcStarRate18Px,
  materialIconIcStars24Px,
  materialIconIcStars48Px,
  materialIconIcStayCurrentLandscape24Px,
  materialIconIcStayCurrentLandscape48Px,
  materialIconIcStayCurrentPortrait24Px,
  materialIconIcStayCurrentPortrait48Px,
  materialIconIcStayPrimaryLandscape24Px,
  materialIconIcStayPrimaryLandscape48Px,
  materialIconIcStayPrimaryPortrait24Px,
  materialIconIcStayPrimaryPortrait48Px,
  materialIconIcStop24Px,
  materialIconIcStop48Px,
  materialIconIcStopScreenShare24Px,
  materialIconIcStopScreenShare48Px,
  materialIconIcStorage24Px,
  materialIconIcStorage48Px,
  materialIconIcStore24Px,
  materialIconIcStore48Px,
  materialIconIcStoreMallDirectory24Px,
  materialIconIcStoreMallDirectory48Px,
  materialIconIcStraighten24Px,
  materialIconIcStraighten48Px,
  materialIconIcStreetview24Px,
  materialIconIcStreetview48Px,
  materialIconIcStrikethroughS24Px,
  materialIconIcStrikethroughS48Px,
  materialIconIcStyle24Px,
  materialIconIcStyle48Px,
  materialIconIcSubdirectoryArrowLeft24Px,
  materialIconIcSubdirectoryArrowLeft48Px,
  materialIconIcSubdirectoryArrowRight24Px,
  materialIconIcSubdirectoryArrowRight48Px,
  materialIconIcSubject24Px,
  materialIconIcSubject48Px,
  materialIconIcSubscriptions24Px,
  materialIconIcSubscriptions48Px,
  materialIconIcSubtitles24Px,
  materialIconIcSubtitles48Px,
  materialIconIcSubway24Px,
  materialIconIcSubway48Px,
  materialIconIcSupervisorAccount24Px,
  materialIconIcSupervisorAccount48Px,
  materialIconIcSurroundSound24Px,
  materialIconIcSurroundSound48Px,
  materialIconIcSwapCalls24Px,
  materialIconIcSwapCalls48Px,
  materialIconIcSwapHoriz24Px,
  materialIconIcSwapHoriz48Px,
  materialIconIcSwapVert24Px,
  materialIconIcSwapVert48Px,
  materialIconIcSwapVerticalCircle24Px,
  materialIconIcSwapVerticalCircle48Px,
  materialIconIcSwitchCamera24Px,
  materialIconIcSwitchCamera48Px,
  materialIconIcSwitchVideo24Px,
  materialIconIcSwitchVideo48Px,
  materialIconIcSync24Px,
  materialIconIcSync48Px,
  materialIconIcSyncDisabled24Px,
  materialIconIcSyncDisabled48Px,
  materialIconIcSyncProblem24Px,
  materialIconIcSyncProblem48Px,
  materialIconIcSystemUpdate24Px,
  materialIconIcSystemUpdate48Px,
  materialIconIcSystemUpdateAlt24Px,
  materialIconIcSystemUpdateAlt48Px,
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-icons-s',
  templateUrl: './icons-s.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsSComponent {
  icons = [
    materialIconIcSatellite24Px,
    materialIconIcSatellite48Px,
    materialIconIcSave24Px,
    materialIconIcSave48Px,
    materialIconIcScanner24Px,
    materialIconIcScanner48Px,
    materialIconIcSchedule24Px,
    materialIconIcSchedule48Px,
    materialIconIcSchool24Px,
    materialIconIcSchool48Px,
    materialIconIcScreenLockLandscape24Px,
    materialIconIcScreenLockLandscape48Px,
    materialIconIcScreenLockPortrait24Px,
    materialIconIcScreenLockPortrait48Px,
    materialIconIcScreenLockRotation24Px,
    materialIconIcScreenLockRotation48Px,
    materialIconIcScreenRotation24Px,
    materialIconIcScreenRotation48Px,
    materialIconIcScreenShare24Px,
    materialIconIcScreenShare48Px,
    materialIconIcSdCard24Px,
    materialIconIcSdCard48Px,
    materialIconIcSdStorage24Px,
    materialIconIcSdStorage48Px,
    materialIconIcSearch24Px,
    materialIconIcSearch48Px,
    materialIconIcSecurity24Px,
    materialIconIcSecurity48Px,
    materialIconIcSelectAll24Px,
    materialIconIcSelectAll48Px,
    materialIconIcSend24Px,
    materialIconIcSend48Px,
    materialIconIcSentimentDissatisfied24Px,
    materialIconIcSentimentDissatisfied48Px,
    materialIconIcSentimentNeutral24Px,
    materialIconIcSentimentNeutral48Px,
    materialIconIcSentimentSatisfied24Px,
    materialIconIcSentimentSatisfied48Px,
    materialIconIcSentimentVeryDissatisfied24Px,
    materialIconIcSentimentVeryDissatisfied48Px,
    materialIconIcSentimentVerySatisfied24Px,
    materialIconIcSentimentVerySatisfied48Px,
    materialIconIcSettings24Px,
    materialIconIcSettings48Px,
    materialIconIcSettingsApplications24Px,
    materialIconIcSettingsApplications48Px,
    materialIconIcSettingsBackupRestore24Px,
    materialIconIcSettingsBackupRestore48Px,
    materialIconIcSettingsBluetooth24Px,
    materialIconIcSettingsBluetooth48Px,
    materialIconIcSettingsBrightness24Px,
    materialIconIcSettingsBrightness48Px,
    materialIconIcSettingsCell24Px,
    materialIconIcSettingsCell48Px,
    materialIconIcSettingsEthernet24Px,
    materialIconIcSettingsEthernet48Px,
    materialIconIcSettingsInputAntenna24Px,
    materialIconIcSettingsInputAntenna48Px,
    materialIconIcSettingsInputComponent24Px,
    materialIconIcSettingsInputComponent48Px,
    materialIconIcSettingsInputComposite24Px,
    materialIconIcSettingsInputComposite48Px,
    materialIconIcSettingsInputHdmi24Px,
    materialIconIcSettingsInputHdmi48Px,
    materialIconIcSettingsInputSvideo24Px,
    materialIconIcSettingsInputSvideo48Px,
    materialIconIcSettingsOverscan24Px,
    materialIconIcSettingsOverscan48Px,
    materialIconIcSettingsPhone24Px,
    materialIconIcSettingsPhone48Px,
    materialIconIcSettingsPower24Px,
    materialIconIcSettingsPower48Px,
    materialIconIcSettingsRemote24Px,
    materialIconIcSettingsRemote48Px,
    materialIconIcSettingsSystemDaydream24Px,
    materialIconIcSettingsSystemDaydream48Px,
    materialIconIcSettingsVoice24Px,
    materialIconIcSettingsVoice48Px,
    materialIconIcShare24Px,
    materialIconIcShare48Px,
    materialIconIcShop24Px,
    materialIconIcShop48Px,
    materialIconIcShopTwo24Px,
    materialIconIcShopTwo48Px,
    materialIconIcShoppingBasket24Px,
    materialIconIcShoppingBasket48Px,
    materialIconIcShoppingCart24Px,
    materialIconIcShoppingCart48Px,
    materialIconIcShortText24Px,
    materialIconIcShortText48Px,
    materialIconIcShowChart24Px,
    materialIconIcShowChart48Px,
    materialIconIcShuffle24Px,
    materialIconIcShuffle48Px,
    materialIconIcSignalCellular0Bar18Px,
    materialIconIcSignalCellular0Bar24Px,
    materialIconIcSignalCellular0Bar48Px,
    materialIconIcSignalCellular1Bar18Px,
    materialIconIcSignalCellular1Bar24Px,
    materialIconIcSignalCellular1Bar48Px,
    materialIconIcSignalCellular2Bar18Px,
    materialIconIcSignalCellular2Bar24Px,
    materialIconIcSignalCellular2Bar48Px,
    materialIconIcSignalCellular3Bar18Px,
    materialIconIcSignalCellular3Bar24Px,
    materialIconIcSignalCellular3Bar48Px,
    materialIconIcSignalCellular4Bar18Px,
    materialIconIcSignalCellular4Bar24Px,
    materialIconIcSignalCellular4Bar48Px,
    materialIconIcSignalCellularConnectedNoInternet0Bar18Px,
    materialIconIcSignalCellularConnectedNoInternet0Bar24Px,
    materialIconIcSignalCellularConnectedNoInternet0Bar48Px,
    materialIconIcSignalCellularConnectedNoInternet1Bar18Px,
    materialIconIcSignalCellularConnectedNoInternet1Bar24Px,
    materialIconIcSignalCellularConnectedNoInternet1Bar48Px,
    materialIconIcSignalCellularConnectedNoInternet2Bar18Px,
    materialIconIcSignalCellularConnectedNoInternet2Bar24Px,
    materialIconIcSignalCellularConnectedNoInternet2Bar48Px,
    materialIconIcSignalCellularConnectedNoInternet3Bar18Px,
    materialIconIcSignalCellularConnectedNoInternet3Bar24Px,
    materialIconIcSignalCellularConnectedNoInternet3Bar48Px,
    materialIconIcSignalCellularConnectedNoInternet4Bar18Px,
    materialIconIcSignalCellularConnectedNoInternet4Bar24Px,
    materialIconIcSignalCellularConnectedNoInternet4Bar48Px,
    materialIconIcSignalCellularNoSim24Px,
    materialIconIcSignalCellularNoSim48Px,
    materialIconIcSignalCellularNull18Px,
    materialIconIcSignalCellularNull24Px,
    materialIconIcSignalCellularNull48Px,
    materialIconIcSignalCellularOff18Px,
    materialIconIcSignalCellularOff24Px,
    materialIconIcSignalCellularOff48Px,
    materialIconIcSignalWifi0Bar18Px,
    materialIconIcSignalWifi0Bar24Px,
    materialIconIcSignalWifi0Bar48Px,
    materialIconIcSignalWifi1Bar18Px,
    materialIconIcSignalWifi1Bar24Px,
    materialIconIcSignalWifi1Bar48Px,
    materialIconIcSignalWifi1BarLock24Px,
    materialIconIcSignalWifi1BarLock48Px,
    materialIconIcSignalWifi2Bar18Px,
    materialIconIcSignalWifi2Bar24Px,
    materialIconIcSignalWifi2Bar48Px,
    materialIconIcSignalWifi2BarLock24Px,
    materialIconIcSignalWifi2BarLock48Px,
    materialIconIcSignalWifi3Bar18Px,
    materialIconIcSignalWifi3Bar24Px,
    materialIconIcSignalWifi3Bar48Px,
    materialIconIcSignalWifi3BarLock24Px,
    materialIconIcSignalWifi3BarLock48Px,
    materialIconIcSignalWifi4Bar18Px,
    materialIconIcSignalWifi4Bar24Px,
    materialIconIcSignalWifi4Bar48Px,
    materialIconIcSignalWifi4BarLock24Px,
    materialIconIcSignalWifi4BarLock48Px,
    materialIconIcSignalWifiOff18Px,
    materialIconIcSignalWifiOff24Px,
    materialIconIcSignalWifiOff48Px,
    materialIconIcSignalWifiStatusbar1Bar26X24Px,
    materialIconIcSignalWifiStatusbar2Bar26X24Px,
    materialIconIcSignalWifiStatusbar3Bar26X24Px,
    materialIconIcSignalWifiStatusbar4Bar26X24Px,
    materialIconIcSignalWifiStatusbarConnectedNoInternet126X24Px,
    materialIconIcSignalWifiStatusbarConnectedNoInternet26X24Px,
    materialIconIcSignalWifiStatusbarConnectedNoInternet226X24Px,
    materialIconIcSignalWifiStatusbarConnectedNoInternet326X24Px,
    materialIconIcSignalWifiStatusbarConnectedNoInternet426X24Px,
    materialIconIcSignalWifiStatusbarNotConnected26X24Px,
    materialIconIcSignalWifiStatusbarNull26X24Px,
    materialIconIcSimCard24Px,
    materialIconIcSimCard48Px,
    materialIconIcSimCardAlert24Px,
    materialIconIcSimCardAlert48Px,
    materialIconIcSkipNext24Px,
    materialIconIcSkipNext48Px,
    materialIconIcSkipPrevious24Px,
    materialIconIcSkipPrevious48Px,
    materialIconIcSlideshow24Px,
    materialIconIcSlideshow48Px,
    materialIconIcSlowMotionVideo24Px,
    materialIconIcSlowMotionVideo48Px,
    materialIconIcSmartphone24Px,
    materialIconIcSmartphone48Px,
    materialIconIcSmokeFree24Px,
    materialIconIcSmokeFree48Px,
    materialIconIcSmokingRooms24Px,
    materialIconIcSmokingRooms48Px,
    materialIconIcSms24Px,
    materialIconIcSms48Px,
    materialIconIcSmsFailed24Px,
    materialIconIcSmsFailed48Px,
    materialIconIcSnooze24Px,
    materialIconIcSnooze48Px,
    materialIconIcSort24Px,
    materialIconIcSort48Px,
    materialIconIcSortByAlpha24Px,
    materialIconIcSpa24Px,
    materialIconIcSpa48Px,
    materialIconIcSpaceBar24Px,
    materialIconIcSpaceBar48Px,
    materialIconIcSpeaker24Px,
    materialIconIcSpeaker48Px,
    materialIconIcSpeakerGroup24Px,
    materialIconIcSpeakerGroup48Px,
    materialIconIcSpeakerNotes24Px,
    materialIconIcSpeakerNotes48Px,
    materialIconIcSpeakerNotesOff24Px,
    materialIconIcSpeakerNotesOff48Px,
    materialIconIcSpeakerPhone24Px,
    materialIconIcSpeakerPhone48Px,
    materialIconIcSpellcheck24Px,
    materialIconIcSpellcheck48Px,
    materialIconIcStar24Px,
    materialIconIcStarBorder24Px,
    materialIconIcStarHalf24Px,
    materialIconIcStarHalf48Px,
    materialIconIcStarRate18Px,
    materialIconIcStars24Px,
    materialIconIcStars48Px,
    materialIconIcStayCurrentLandscape24Px,
    materialIconIcStayCurrentLandscape48Px,
    materialIconIcStayCurrentPortrait24Px,
    materialIconIcStayCurrentPortrait48Px,
    materialIconIcStayPrimaryLandscape24Px,
    materialIconIcStayPrimaryLandscape48Px,
    materialIconIcStayPrimaryPortrait24Px,
    materialIconIcStayPrimaryPortrait48Px,
    materialIconIcStop24Px,
    materialIconIcStop48Px,
    materialIconIcStopScreenShare24Px,
    materialIconIcStopScreenShare48Px,
    materialIconIcStorage24Px,
    materialIconIcStorage48Px,
    materialIconIcStore24Px,
    materialIconIcStore48Px,
    materialIconIcStoreMallDirectory24Px,
    materialIconIcStoreMallDirectory48Px,
    materialIconIcStraighten24Px,
    materialIconIcStraighten48Px,
    materialIconIcStreetview24Px,
    materialIconIcStreetview48Px,
    materialIconIcStrikethroughS24Px,
    materialIconIcStrikethroughS48Px,
    materialIconIcStyle24Px,
    materialIconIcStyle48Px,
    materialIconIcSubdirectoryArrowLeft24Px,
    materialIconIcSubdirectoryArrowLeft48Px,
    materialIconIcSubdirectoryArrowRight24Px,
    materialIconIcSubdirectoryArrowRight48Px,
    materialIconIcSubject24Px,
    materialIconIcSubject48Px,
    materialIconIcSubscriptions24Px,
    materialIconIcSubscriptions48Px,
    materialIconIcSubtitles24Px,
    materialIconIcSubtitles48Px,
    materialIconIcSubway24Px,
    materialIconIcSubway48Px,
    materialIconIcSupervisorAccount24Px,
    materialIconIcSupervisorAccount48Px,
    materialIconIcSurroundSound24Px,
    materialIconIcSurroundSound48Px,
    materialIconIcSwapCalls24Px,
    materialIconIcSwapCalls48Px,
    materialIconIcSwapHoriz24Px,
    materialIconIcSwapHoriz48Px,
    materialIconIcSwapVert24Px,
    materialIconIcSwapVert48Px,
    materialIconIcSwapVerticalCircle24Px,
    materialIconIcSwapVerticalCircle48Px,
    materialIconIcSwitchCamera24Px,
    materialIconIcSwitchCamera48Px,
    materialIconIcSwitchVideo24Px,
    materialIconIcSwitchVideo48Px,
    materialIconIcSync24Px,
    materialIconIcSync48Px,
    materialIconIcSyncDisabled24Px,
    materialIconIcSyncDisabled48Px,
    materialIconIcSyncProblem24Px,
    materialIconIcSyncProblem48Px,
    materialIconIcSystemUpdate24Px,
    materialIconIcSystemUpdate48Px,
    materialIconIcSystemUpdateAlt24Px,
    materialIconIcSystemUpdateAlt48Px,
  ];

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
