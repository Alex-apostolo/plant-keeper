import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListingComponent } from './createlisting.component';

describe('ListingComponent', () => {
  let component: CreateListingComponent;
  let fixture: ComponentFixture<CreateListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
