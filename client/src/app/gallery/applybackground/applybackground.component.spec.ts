import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplybackgroundComponent } from './applybackground.component';

describe('ApplybackgroundComponent', () => {
  let component: ApplybackgroundComponent;
  let fixture: ComponentFixture<ApplybackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplybackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplybackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
