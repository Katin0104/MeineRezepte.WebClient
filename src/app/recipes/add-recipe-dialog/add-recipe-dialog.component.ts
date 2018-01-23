import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeCardViewModel, RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss']
})
export class AddRecipeDialogComponent implements OnInit {

  public recipeFormData: RecipeCardViewModel;
  public isSubmitPressed: Boolean;
  public isEditMode = false;

  constructor(
    public dialogRef: MatDialogRef<AddRecipeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private recipeService: RecipesService) {
      this.recipeFormData = (data.recipeCardData != null) ? data.recipeCardData : new RecipeCardViewModel();
      this.recipeFormData.favorite = (data.recipeCardData == null) ? false : data.recipeCardData.favorite;
      this.isEditMode = data.recipeCardData != null;
    }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();

    // verhindert das onSubmit aufgerufen wird.
    return false;
  }

  public onSubmit() {
    if (!this.isSubmitPressed) {
      if (!this.isEditMode) {
        this.recipeService.createRecipeFromRecipeCard(this.recipeFormData).subscribe((resp: any) => {
          this.dialogRef.close();
        });
      } else {
        this.recipeService.updateRecipeFromRecipeCard(this.recipeFormData).subscribe((resp: any) => {
          this.dialogRef.close();
        });
      }
    }

    this.isSubmitPressed = true;
  }
}
