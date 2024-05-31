import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellesDetailsComponent } from './tabelles-details.component';

describe('TabellesDetailsComponent', () => {
  let component: TabellesDetailsComponent;
  let fixture: ComponentFixture<TabellesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabellesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabellesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
