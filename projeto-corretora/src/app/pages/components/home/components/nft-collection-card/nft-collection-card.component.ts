import { 
  Component, 
  OnInit, 
  Input, 
  ViewChild, 
  ElementRef,
} from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

import { toggleShowDetails } from '@pages/services';
import { NFT, Rarity, RarityLabel } from '@shared/models';

@Component({
  selector: 'app-nft-collection-card',
  templateUrl: './nft-collection-card.component.html',
  styleUrls: ['./nft-collection-card.component.scss']
})
export class NftCollectionCardComponent implements OnInit {
  public readonly Rarity: typeof Rarity = Rarity;
  public readonly RarityLabel: typeof RarityLabel = RarityLabel;

  @Input() public nft!: NFT;
  @ViewChild('card') public card?: ElementRef;


  constructor(
    private store: Store<{ appOpenDetails: boolean}>
  ) { }

  public isOpenDetails$: Observable<boolean> = this.store.select('appOpenDetails');

  ngOnInit(): void {
  }

  public getNameRarity(rarity: Rarity): string {
    return RarityLabel[Rarity[rarity] as keyof typeof RarityLabel];
  }

  public showDetails(): void {
    this.store.dispatch(toggleShowDetails());
    this.card?.nativeElement.classList.add('detail');
  }
}
