import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export class RecipeCardViewModel {
  public name: string;
  public portions: number;
  public totalTime: number;
  public workingTime: number;
  public favorite: boolean;
  public imageURL: string;

  constructor() { }
}

@Injectable()
export class RecipesService {

  constructor(private http: HttpClient) {
  }

  public getRecipeCards(): Observable<Array<RecipeCardViewModel>> {
    // Später HTTP Call gegen Backend
    // return this.recipeCardObservable;
    return this.http.get<Array<RecipeCardViewModel>>('api/recipeCards/listCards');
  }

  public createRecipeFromRecipeCard(recipeVM: RecipeCardViewModel): Observable<any> {
    return this.http.post<any>('api/recipeCards', recipeVM);
  }

  public updateRecipeFromRecipeCard(recipeVM: RecipeCardViewModel): Observable<any> {
    return this.http.put<any>('api/recipeCards', recipeVM);
  }
}
