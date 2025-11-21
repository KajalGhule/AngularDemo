import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdiComponent } from './gdi.component';

describe('GdiComponent', () => {
  let component: GdiComponent;
  let fixture: ComponentFixture<GdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GdiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
