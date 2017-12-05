import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';

import { DialogMessageComponent } from './components/dialog-message/dialog-message.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [DialogMessageComponent],
  entryComponents: [DialogMessageComponent],
  exports: [DialogMessageComponent]
})
export class DialogModule { }
