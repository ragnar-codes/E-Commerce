import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScategoriesComponent } from './list-scategories.component';

describe('ListScategoriesComponent', () => {
  let component: ListScategoriesComponent;
  let fixture: ComponentFixture<ListScategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListScategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
