import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPurchaseComponent } from './content-purchase.component';

describe('ContentPurchaseComponent', () => {
  let component: ContentPurchaseComponent;
  let fixture: ComponentFixture<ContentPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
