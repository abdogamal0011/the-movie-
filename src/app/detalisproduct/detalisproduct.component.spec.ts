import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisproductComponent } from './detalisproduct.component';

describe('DetalisproductComponent', () => {
  let component: DetalisproductComponent;
  let fixture: ComponentFixture<DetalisproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalisproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalisproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
