import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActourComponent } from './actour.component';

describe('ActourComponent', () => {
  let component: ActourComponent;
  let fixture: ComponentFixture<ActourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
