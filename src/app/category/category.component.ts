import { Component,inject,PLATFORM_ID } from '@angular/core';
import { GetmealsService } from '../getmeals.service';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink,RouterLinkActive,ActivatedRoute } from '@angular/router';
import { Meal } from '../interfaces/meal';

@Component({
  selector: 'app-category',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  _GetmealsService = inject(GetmealsService);
  _PLATFORM_ID = inject(PLATFORM_ID);
  _Active = inject(ActivatedRoute);
  Categories: string[] = [];
  Meals:Meal[]=[];
  ngOnInit() {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this._GetmealsService.getCategories().subscribe((data: any) => {
        this.Categories = data.meals.map((x: any) => x.strCategory);
      });
      console.log(this.Categories);
    

    this._Active.params.subscribe((params:any) => {
      if (params.categoryname)
      {
        if(params.categoryname == 'all')
        {
          this._GetmealsService.getAllMeald().subscribe((data: any) => {
          this.Meals = [];
          this.Meals = data.meals.map((x:any)=>{
            return {
              strMeal:x.strMeal,
              strMealThumb:x.strMealThumb,
              idMeal:x.idMeal,
              strArea:x.strArea
            }
          });
          });
        }
        this._GetmealsService
          .getMealsByCategory(params.categoryname)
          .subscribe((data: any) => {
            this.Meals=[];
            this.Meals = data.meals;
          });
        }
    })


  }
}
}
