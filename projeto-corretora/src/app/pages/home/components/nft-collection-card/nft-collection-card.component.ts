import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Store } from "@ngrx/store";

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
  @Output() public details: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('card') public card?: ElementRef;


  constructor(private store: Store<{ app: boolean}>) { }

  public teste$ = this.store.select('app');

  ngOnInit(): void {
    console.log(this.teste$);
  }

  public getNameRarity(rarity: Rarity): string {
    return RarityLabel[Rarity[rarity] as keyof typeof RarityLabel];
  }

  public getDetails(): void {
    this.card?.nativeElement.classList.add('detail');
    this.details.emit(true);
  }
}
