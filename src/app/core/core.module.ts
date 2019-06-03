import { NgModule } from '@angular/core';
import { MaterialuiModule } from './materialui.module';
import { UiModule } from '../ui/ui/ui.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialuiModule,UiModule
  ],
  exports:[UiModule]
})
export class CoreModule { }
