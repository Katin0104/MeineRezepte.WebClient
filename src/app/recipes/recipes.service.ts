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

  constructor(name: string, portions: number,
    totalTime: number, workingTime: number,
    favorite: boolean, imageURL: string) {
      this.name = name;
      this.portions = portions;
      this.totalTime = totalTime;
      this.favorite = favorite;
      this.imageURL = imageURL;
  }
}

@Injectable()
export class RecipesService {

  constructor(private http: HttpClient) {
  }

  public getRecipeCards(): Observable<Array<RecipeCardViewModel>> {
    // Später HTTP Call gegen Backend
    // return this.recipeCardObservable;
    return this.http.get<Array<RecipeCardViewModel>>('api/recipes/listCards');
  }

}
