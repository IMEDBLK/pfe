import { ComponentFixture, TestBed } from '@angular/core/testing';

import { packListComponent } from './pack-list.component';

describe('packListComponent', () => {
  let component: packListComponent;
  let fixture: ComponentFixture<packListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ packListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(packListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
