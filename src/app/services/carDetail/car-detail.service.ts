import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from 'src/app/models/carDetailResponseModel';
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl:string = "https://localhost:7009/api/";
  constructor(private httpClient:HttpClient) { }


  getCarDetails(): Observable<CarDetailResponseModel>{
    let newPath = this.apiUrl + "cars/getcarsdetail";
    return this.httpClient.get<CarDetailResponseModel>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<CarDetailResponseModel>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+ brandId;
    return this.httpClient.get<CarDetailResponseModel>(newPath);
  }
}
