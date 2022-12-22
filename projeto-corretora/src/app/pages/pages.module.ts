import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { 
  HomeComponent,
  NftCollectionDescriptionComponent
} from '@pages/home';
import { MaterialModule } from '@shared/material';
import { CollectionDetailsComponent } from '@pages/collection-details';

const components = [
  HomeComponent,
  CollectionDetailsComponent,
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
export class PagesModule { }
