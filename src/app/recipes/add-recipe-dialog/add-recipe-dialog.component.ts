import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeCardViewModel } from '../recipes.service';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss']
})
export class AddRecipeDialogComponent implements OnInit {

  public recipeFormData: RecipeCardViewModel;

  constructor(
    public dialogRef: MatDialogRef<AddRecipeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.recipeFormData = new RecipeCardViewModel();
    }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public onSubmit() {
  }
}
