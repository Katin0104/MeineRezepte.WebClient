import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

  private recipeCardList: Array<RecipeCardViewModel>;
  private recipeCardObservable: Observable<Array<RecipeCardViewModel>>;

  constructor() {
    this.recipeCardList = new Array<RecipeCardViewModel>();

    this.recipeCardList.push(
      new RecipeCardViewModel('Hamburger', 3, 20, 10, true,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wyLhE8egU2e0-xcm4GK21A4dKVGTz9VoDAyhvVRcF8UmWSZl_Q')
    );

    this.recipeCardList.push(
      new RecipeCardViewModel('Pommes', 3, 20, 10, true,
        'https://image.brigitte.de/10209526/large1x1-306-306/c0e3dff7f5d707cd6330424706e880ad/HI/pommes-frites-t.jpg')
    );

    this.recipeCardObservable = new Observable<Array<RecipeCardViewModel>>((observer) => {
      observer.next(this.recipeCardList);
    });
  }

  public getRecipeCards(): Observable<Array<RecipeCardViewModel>> {
    // Später HTTP Call gegen Backend
    return this.recipeCardObservable;
  }

}
