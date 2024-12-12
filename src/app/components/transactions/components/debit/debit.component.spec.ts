import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitComponent } from './debit.component';

describe('DebitComponent', () => {
  let component: DebitComponent;
  let fixture: ComponentFixture<DebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
