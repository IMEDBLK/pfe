import { ComponentFixture, TestBed } from '@angular/core/testing';

import { autoecoleListComponent } from './autoecole-list.component';

describe('autoecoleListComponent', () => {
  let component: autoecoleListComponent;
  let fixture: ComponentFixture<autoecoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ autoecoleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(autoecoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
