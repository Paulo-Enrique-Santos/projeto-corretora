import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CollectionDetailsComponent } from '@collection-details';
import { ComponentsModule } from '@collection-details/components';

@NgModule({
  declarations: [
    CollectionDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [ CollectionDetailsComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CollectionDetailsModule { }
