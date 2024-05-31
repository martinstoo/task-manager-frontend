import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellesListComponent } from './tabelles-list.component';

describe('TabellesListComponent', () => {
  let component: TabellesListComponent;
  let fixture: ComponentFixture<TabellesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabellesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabellesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
