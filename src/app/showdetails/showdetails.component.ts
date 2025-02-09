import { Component, inject,PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetmealsService } from '../getmeals.service';
import { isPlatformBrowser } from '@angular/common';
import { MealDetails,Ingredient } from '../interfaces/meal-details';
@Component({
  selector: 'app-showdetails',
  imports: [],
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.scss',
})
export class ShowdetailsComponent {
  _GetmealsService = inject(GetmealsService);
  _ActivatedRoute= inject(ActivatedRoute);
  _PLATFORM_ID = inject(PLATFORM_ID);
  meal!:MealDetails;
  ngOnInit()
  {
    if(isPlatformBrowser(this._PLATFORM_ID)){
    this._ActivatedRoute.params.subscribe((params:any)=>{
      if(params.id)
      {
        this._GetmealsService.GetmealDetails(params.id).subscribe((data:any)=>{
          let ingredients:Ingredient[]=[];
          for (let i = 1; i <= 20; i++) {
            let current = `strIngredient${i}`;
            if(data.meals[0][current])
            {
              ingredients.push({strIngredient:data.meals[0][current],strMeasure:data.meals[0][`strMeasure${i}`]})
            }
          }
          this.meal={
            strMeal:data.meals[0].strMeal,
            strInstructions:data.meals[0].strInstructions,
            strMealThumb:data.meals[0].strMealThumb,
            strYoutube:data.meals[0].strYoutube,
            ingredients:ingredients,
            strSource:data.meals[0].strSource
          }
          console.log(this.meal);
        })
      }
    })
  }
}

}
