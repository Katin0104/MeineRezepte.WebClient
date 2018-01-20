import { Component, OnInit } from '@angular/core';
import { RecipeCardViewModel, RecipesService } from '../recipes.service';
import { MatDialog } from '@angular/material';
import { AddRecipeDialogComponent } from '../add-recipe-dialog/add-recipe-dialog.component';

@Component({
  selector: 'app-recipe-cards-view',
  templateUrl: './recipe-cards-view.component.html',
  styleUrls: ['./recipe-cards-view.component.scss']
})
export class RecipeCardsViewComponent implements OnInit {

  public recipeCardList: Array<RecipeCardViewModel>;

  constructor(private recipesService: RecipesService, public dialog: MatDialog) {
    this.recipeCardList = new Array<RecipeCardViewModel>();

    this.recipesService.getRecipeCards().subscribe((recipes) => {
      this.recipeCardList = recipes;
    });
  }

  ngOnInit() {
  }

  public openAddRecipeCardDialog() {
    const dialogRef = this.dialog.open(AddRecipeDialogComponent, {
      width: '500px',
      data: {  }
    });
  }

}
