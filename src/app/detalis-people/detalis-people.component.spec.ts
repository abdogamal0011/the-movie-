import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisPeopleComponent } from './detalis-people.component';

describe('DetalisPeopleComponent', () => {
  let component: DetalisPeopleComponent;
  let fixture: ComponentFixture<DetalisPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalisPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalisPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
