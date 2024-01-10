
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';


@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  planDetails: any = {};
  productDetails: any[] = [];
  constructor(private basicPlanService: BasicPlanService) {}
  ngOnInit(): void {
    this.loadProducts();
  }

//  ok(): void {
//     this.basicPlanService.getPlans().subscribe((data:) => {
//       if (data && data.plans && data.plans.length > 0) {
//         this.planDetails = data.plans[0];
//          console.log(this.planDetails);
//       }
//     });
//   }
  loadProucts() {
    this.basicPlanService.getProducts().subscribe(
      (data: any[]) => {
        this.productDetails = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
}
