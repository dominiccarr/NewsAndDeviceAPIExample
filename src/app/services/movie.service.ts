import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  constructor(private http: HttpClient) {}

  getNews(topic: string): Observable<any>{
    return this.http.get(`https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${this.API_KEY}`);
  
  }

}