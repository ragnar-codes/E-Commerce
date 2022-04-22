import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScategoriesComponent } from './edit-scategories.component';

describe('EditScategoriesComponent', () => {
  let component: EditScategoriesComponent;
  let fixture: ComponentFixture<EditScategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
