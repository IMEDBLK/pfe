import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpackComponent } from './add-pack.component';

describe('AddBookComponent', () => {
  let component: AddpackComponent;
  let fixture: ComponentFixture<AddpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
