import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardsViewComponent } from './recipe-cards-view.component';

describe('RecipeCardsViewComponent', () => {
  let component: RecipeCardsViewComponent;
  let fixture: ComponentFixture<RecipeCardsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCardsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
