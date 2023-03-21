import { ComponentFixture, TestBed } from '@angular/core/testing';

import { packDetailComponent } from './pack-detail.component';

describe('BookDetailComponent', () => {
  let component: packDetailComponent;
  let fixture: ComponentFixture<packDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ packDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(packDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
