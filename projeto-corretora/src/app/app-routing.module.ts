import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, NftCollectionCardComponent, NftCollectionDescriptionComponent } from '@pages/home';
import { CollectionDetailsComponent } from '@pages/collection-details';

const routes: Routes = [
  { path: 'teste', component: NftCollectionCardComponent},
  { path: 'detalhes-colecao-nft', component: CollectionDetailsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
