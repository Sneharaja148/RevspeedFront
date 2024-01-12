import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { i_plans } from '../../../card';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  plans: i_plans[] | any = [];

  uplan: any[] = [];

  selectedType: string = 'individual'; // Default to 'individual'
  individualPlans: any[] = [];
  businessPlans: any[] = [];

  constructor(private basicPlanService: BasicPlanService, private http: HttpClient) {}

  ngOnInit(): void {
    this.basicPlanService.getPlans().subscribe((plans) => {
      this.plans = plans;
    });

    this.fetchData();
  }

  addplan(uplan: any) {
    this.basicPlanService.addSelectedPlan(uplan);
  }

  getFilteredPlans(): any[] {
    return this.selectedType === 'individual' ? this.individualPlans : this.businessPlans;
  }

  switchType(type: string): void {
    this.selectedType = type;
  }
  

  fetchData(): void {
    // Fetch individual plans from the individual JSON server using HttpClient
    this.http.get<any[]>('http://localhost:3002/plans').subscribe(data => {
      this.individualPlans = data;
    });

    // Fetch business plans from the business JSON server using HttpClient
    this.http.get<any[]>('http://localhost:3001/plans').subscribe(data => {
      this.businessPlans = data;
    });
  }
}

