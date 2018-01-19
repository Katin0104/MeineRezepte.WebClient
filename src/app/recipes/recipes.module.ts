import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardsViewComponent } from './recipe-cards-view/recipe-cards-view.component';
import { RecipesOverviewComponent } from './recipes-overview/recipes-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  declarations: [RecipeFilterComponent, RecipeCardComponent, RecipeCardsViewComponent, RecipesOverviewComponent]
})
export class RecipesModule { }
