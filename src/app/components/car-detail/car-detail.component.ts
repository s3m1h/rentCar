import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private carDetails:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if(params["brandId"]){
          this.getCarsByBrands(params["brandId"]);
        }
        else{
          this.getDetails();
        }

      }
    );
  }

    getDetails(){
      this.carDetails.getCarDetails().subscribe(r=>{
        this.details=r.data;
      });
    }
    getCarsByBrands(brandId:number){
      this.carDetails.getCarsByBrand(brandId).subscribe(b=>{
        this.details = b.data;
      });

    }

  }