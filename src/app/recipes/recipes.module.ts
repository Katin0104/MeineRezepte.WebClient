import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardsViewComponent } from './recipe-cards-view/recipe-cards-view.component';
import { RecipesOverviewComponent } from './recipes-overview/recipes-overview.component';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { RecipesService } from './recipes.service';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [RecipeFilterComponent, RecipeCardComponent, RecipeCardsViewComponent, RecipesOverviewComponent],
  providers: [RecipesService]
})
export class RecipesModule { }
