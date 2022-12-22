import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";

import { CommonModule } from '@angular/common';

import { 
  HomeComponent,
  NftCollectionDescriptionComponent,
  NftCollectionCardComponent
} from '@pages/home';
import { MaterialModule } from '@shared/material';
import { CollectionDetailsComponent } from '@pages/collection-details';
import { appReducer } from './home/store/nft.store';

const components = [
  HomeComponent,
  CollectionDetailsComponent,
  NftCollectionDescriptionComponent,
  NftCollectionCardComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forRoot( {app: appReducer })
  ],
  exports: [...components]
})
export class PagesModule { }
