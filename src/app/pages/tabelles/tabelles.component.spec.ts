import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellesComponent } from './tabelles.component';

describe('TabellesComponent', () => {
  let component: TabellesComponent;
  let fixture: ComponentFixture<TabellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabellesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
