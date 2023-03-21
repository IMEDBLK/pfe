import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoecoleDetailComponent } from './autoecole-detail.component';

describe('autoecoleDetailComponent', () => {
  let component: autoecoleDetailComponent;
  let fixture: ComponentFixture<autoecoleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoecoleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(autoecoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
