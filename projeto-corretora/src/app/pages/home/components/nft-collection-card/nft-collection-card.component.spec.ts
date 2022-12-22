import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCollectionCardComponent } from './nft-collection-card.component';

describe('NftCollectionCardComponent', () => {
  let component: NftCollectionCardComponent;
  let fixture: ComponentFixture<NftCollectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftCollectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftCollectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
