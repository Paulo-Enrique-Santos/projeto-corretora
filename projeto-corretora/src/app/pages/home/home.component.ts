import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NFT } from '@shared/models';
import { Coins, CoinsList } from '@shared/models/coins.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public collectionsNft: Array<NFT> =
    [
      {
        collectionName: 'Diamond',
        rarity: 'EXTRA RARA'
      },
      {
        collectionName: 'Pand',
        rarity: 'ÉPICA'
      },
      {
        collectionName: 'Beer',
        rarity: 'RARA'
      },
      {
        collectionName: 'Willy',
        rarity: 'COMUM'
      }
    ];

  public coins: Array<Coins> =
    [
      {
        imagePath: 'images/coins/ada.svg'
      },
      {
        imagePath: 'images/coins/bnb.svg'
      },
      {
        imagePath: 'images/coins/busd.svg'
      },
      {
        imagePath: 'images/coins/doge.svg'
      },
      {
        imagePath: 'images/coins/eth.svg'
      },
      {
        imagePath: 'images/coins/mutli-collateral-dai.svg'
      },
      {
        imagePath: 'images/coins/shib.png'
      },
      {
        imagePath: 'images/coins/uniswap-v2.svg'
      },
      {
        imagePath: 'images/coins/usdc.svg'
      },
      {
        imagePath: 'images/coins/usdt.svg'
      }
    ];

  public coinsList: Array<CoinsList> = [
    {
      coins: this.coins
    },
    {
      coins: this.coins
    },
    {
      coins: this.coins
    },
    {
      coins: this.coins
    },
  ]

  constructor() { }

  ngAfterViewInit(): void {
    this.setRandomPositionCoinsIcon();
  }

  ngOnInit(): void {
    
  }

  
  public scrollReveal(event: any): void {
    const sectionsList: Array<HTMLElement> = 
      Array.from(document.querySelectorAll('section') as NodeListOf<HTMLElement>);

    sectionsList.forEach((section: HTMLElement) => {
      const sectionHeight: number = section.offsetHeight;
      const scrollHeight: number = event.path[1].pageYOffset + (sectionHeight * 0.75);
      const sectionTop: number = section.offsetTop;

      if (section.classList.contains('active')) {
        const coinsList: Array<HTMLElement> = 
          Array.from(document.querySelectorAll('.coins img') as NodeListOf<HTMLElement>);
        const totalScrollTranslate: number = 1000 / (sectionHeight * 0.5);
  
        if (scrollHeight > sectionTop) {
          const currentTranslate: number = 1000 - ((scrollHeight - sectionTop) * totalScrollTranslate);
  
          coinsList.forEach((coin: HTMLElement) => 
            coin.style.transform = `translateY(${currentTranslate > 0 ? currentTranslate : 0}%)`);
        }
      }

      scrollHeight > sectionTop ? section.classList.add('reveal') : section.classList.remove('reveal');
    });
  }
  
  private setRandomPositionCoinsIcon(): void {
    const coinsIcon: Array<HTMLElement> = 
      Array.from(document.querySelectorAll('.coins img') as NodeListOf<HTMLElement>);

    coinsIcon.forEach((icon: HTMLElement) => {
      const top: number = Math.floor(5 + (Math.random() * 80));
      const left: number = Math.floor(5 + (Math.random() * 90));
      const time: number = 3 + Math.floor(Math.random() * 4);

      icon.style.top = `${top}%`;
      icon.style.left = `${left}%`;
      icon.style.transition = `${time}s`;
    });
  }
}
