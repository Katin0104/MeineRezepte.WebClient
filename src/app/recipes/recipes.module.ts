import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardsViewComponent } from './recipe-cards-view/recipe-cards-view.component';
import { RecipesOverviewComponent } from './recipes-overview/recipes-overview.component';
import { MatCardModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { RecipesService } from './recipes.service';
import { AddRecipeDialogComponent } from './add-recipe-dialog/add-recipe-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [RecipeFilterComponent, RecipeCardComponent, RecipeCardsViewComponent, RecipesOverviewComponent, AddRecipeDialogComponent],
  providers: [RecipesService],
  entryComponents: [AddRecipeDialogComponent]
})
export class RecipesModule { }
