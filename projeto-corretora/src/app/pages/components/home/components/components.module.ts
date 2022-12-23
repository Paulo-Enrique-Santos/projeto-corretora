import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NftCollectionCardComponent } from '@home/components/nft-collection-card';
import { MaterialModule } from '@shared/material';

const components = [
  NftCollectionCardComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
