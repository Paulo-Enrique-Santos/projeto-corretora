import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

import { toggleShowDetails } from '@pages/services';

@Component({
  selector: 'app-nft-collection-description',
  templateUrl: './nft-collection-description.component.html',
  styleUrls: ['./nft-collection-description.component.scss']
})
export class NftCollectionDescriptionComponent implements OnInit {

  constructor(
    private store: Store<{ appOpenDetails: boolean }>
  ) { }

  public isOpenDetails$: Observable<boolean> = this.store.select('appOpenDetails');

  ngOnInit(): void {
  }

  public closeDetails(): void {

    this.store.dispatch(toggleShowDetails());
  }
}
