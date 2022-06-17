import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string = "https://localhost:7009/api/";
  constructor(private httpClient:HttpClient ) { }


  getCars(): Observable<CarResponseModel>{
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<CarResponseModel>(newPath);
  }
  getCarsByBrand(brandId:number): Observable<CarResponseModel>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+ brandId;
    return this.httpClient.get<CarResponseModel>(newPath);
  }
  getCarsByColor(colorId:number): Observable<CarResponseModel>{
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId="+ colorId;
    return this.httpClient.get<CarResponseModel>(newPath);
  }
}

