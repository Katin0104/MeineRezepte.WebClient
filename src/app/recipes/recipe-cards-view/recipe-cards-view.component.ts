import { Component, OnInit } from '@angular/core';
import { RecipeCardViewModel, RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-cards-view',
  templateUrl: './recipe-cards-view.component.html',
  styleUrls: ['./recipe-cards-view.component.scss']
})
export class RecipeCardsViewComponent implements OnInit {

  public recipeCardList: Array<RecipeCardViewModel>;

  constructor(private recipesService: RecipesService) {
    this.recipeCardList = new Array<RecipeCardViewModel>();

    this.recipesService.getRecipeCards().subscribe((recipes) => {
      this.recipeCardList = recipes;
    });
  }

  ngOnInit() {
  }

}
