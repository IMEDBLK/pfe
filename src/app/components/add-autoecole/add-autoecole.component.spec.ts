import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddautoecoleComponent } from './add-autoecole.component';

describe('AddautoecoleComponent', () => {
  let component: AddautoecoleComponent;
  let fixture: ComponentFixture<AddautoecoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddautoecoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddautoecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
