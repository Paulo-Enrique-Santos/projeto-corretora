import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NftCollectionDescriptionComponent } from '@collection-details/components/nft-collection-description';
import { MaterialModule } from '@shared/material';

const components = [
  NftCollectionDescriptionComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
