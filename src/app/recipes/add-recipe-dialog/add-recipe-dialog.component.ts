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

  constructor(
    public dialogRef: MatDialogRef<AddRecipeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private recipeService: RecipesService) {
      this.recipeFormData = new RecipeCardViewModel();
      this.recipeFormData.favorite = false;
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
      this.recipeService.createRecipeFromRecipeCard(this.recipeFormData).subscribe((resp: any) => {
        this.dialogRef.close();
      });
    }

    this.isSubmitPressed = true;
  }
}
