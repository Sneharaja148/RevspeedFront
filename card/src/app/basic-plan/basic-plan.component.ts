
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
  
  constructor(private basicPlanService: BasicPlanService) {}
  ngOnInit(): void {
    this.basicPlanService.getPlans().subscribe((plans) => {
      this.plans = plans;
      
      
    });
    
  }

}
