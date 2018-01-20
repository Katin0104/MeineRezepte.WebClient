import { Component, OnInit, Input } from '@angular/core';
import { Url } from 'url';
import { RecipeCardViewModel } from '../recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  public recipe: RecipeCardViewModel;

  /*public name: string;

  @Input()
  public portions: number;

  @Input()
  public totalTime: number;

  @Input()
  public workingTime: number;

  @Input()
  public favorite: boolean;

  @Input()
  public imageURL: string;*/


  constructor() {
  }

  ngOnInit() {
  }

}
