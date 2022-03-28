import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailResponseModel } from 'src/app/models/carDetailResponseModel';
import { CarDetailService } from 'src/app/services/carDetail/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  details:CarDetail[] =[];
  constructor(private carDetails:CarDetailService) { }

  ngOnInit(): void {
    this.getDetails();
  }

    getDetails(){
      this.carDetails
      .getCarDetails()
      .subscribe(r=>{
        this.details=r.data
      });
    }

}
