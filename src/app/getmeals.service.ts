import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetmealsService {
  _HttpClient=inject(HttpClient);
  constructor() {}
  getCategories() {
    return this._HttpClient.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );
  }

  getMealsByCategory(category: string) {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  getAllMeald()
  {
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }

  GetmealDetails(id: string) {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
