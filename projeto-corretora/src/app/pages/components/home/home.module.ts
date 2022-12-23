import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HomeComponent } from '@home';
import { ComponentsModule } from '@home/components';
import { MaterialModule } from '@shared/material';
import { StoreModule } from '@ngrx/store';
import { appOpenDetailsReducer } from '@pages/services';

const reducer = {
  appOpenDetails:  appOpenDetailsReducer
}

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    StoreModule.forRoot( reducer )
  ],
  exports: [ HomeComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
