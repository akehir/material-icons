import { ModuleWithProviders, NgModule } from '@angular/core';
import { MaterialIconComponent } from './icon.component';
import { MaterialIconsRegistry } from './icons.registry';

@NgModule({
  declarations: [MaterialIconComponent],
  imports: [],
  exports: [MaterialIconComponent]
})
export class MaterialIconsModule {
  static forRoot(): ModuleWithProviders<MaterialIconsModule> {
    return {
      ngModule: MaterialIconsModule,
      providers: [
        MaterialIconsRegistry,
      ],
    };
  }
}
