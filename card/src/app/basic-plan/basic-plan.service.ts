import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

import { i_plans } from '../../../card';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  private apiUrl = 'http://localhost:3001/plans'; 

  constructor(private http: HttpClient) { }

  getPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.apiUrl).pipe(
      tap(data => console.log('Fetched plans:', data)),
      catchError(error => {
        console.error('Error fetching plans:', error);
        throw error;
      })
    );
  }

  selectedPlans: any[] = [];

  addSelectedPlan(a_plans: any): void {
    // Add the selected plan to the list
    this.selectedPlans.push(a_plans);
  
}


}
