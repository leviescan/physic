import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWalletComponent } from './content-wallet.component';

describe('ContentWalletComponent', () => {
  let component: ContentWalletComponent;
  let fixture: ComponentFixture<ContentWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
