import { Component, OnInit, Input } from '@angular/core';
import { Url } from 'url';
import { RecipeCardViewModel } from '../recipes.service';
import { MatDialog } from '@angular/material';
import { AddRecipeDialogComponent } from '../add-recipe-dialog/add-recipe-dialog.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  public recipe: RecipeCardViewModel;

  public defaultImage = 'http://media-cdn.sueddeutsche.de/image/sz.1.1895115/940x528?v=1392995436';

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public openActionsMenu() {
    const dialogRef = this.dialog
    .open(AddRecipeDialogComponent, {
      width: '500px',
      data: {
        recipeCardData: this.recipe
       }
    });
  }

}
