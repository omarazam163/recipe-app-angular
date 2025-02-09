export interface MealDetails {
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strSource: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  strIngredient: string;
  strMeasure:string;
}

