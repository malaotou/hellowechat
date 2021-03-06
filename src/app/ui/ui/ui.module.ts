import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { MaterialuiModule } from 'src/app/core/materialui.module';
import { FireService } from '../service/fire.service';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    MaterialuiModule
  ],
  exports:[HeaderComponent, LayoutComponent],
  providers:[FireService]
})
export class UiModule { }
