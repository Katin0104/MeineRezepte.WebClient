import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesOverviewComponent } from './recipes-overview/recipes-overview.component';

const routes: Routes = [{
  path: 'recipes',
  component: RecipesOverviewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
