import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { i_plans } from '../card';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {

  private plansUrl = 'http://localhost:3000/plans';
  constructor(private http: HttpClient) { }
  getPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.plansUrl);
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.plansUrl);
  }
}
