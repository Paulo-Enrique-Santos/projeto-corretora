import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCollectionDescriptionComponent } from './nft-collection-description.component';

describe('NftCollectionDescriptionComponent', () => {
  let component: NftCollectionDescriptionComponent;
  let fixture: ComponentFixture<NftCollectionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftCollectionDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftCollectionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
