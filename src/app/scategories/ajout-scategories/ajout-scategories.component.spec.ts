import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutScategoriesComponent } from './ajout-scategories.component';

describe('AjoutScategoriesComponent', () => {
  let component: AjoutScategoriesComponent;
  let fixture: ComponentFixture<AjoutScategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutScategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutScategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
