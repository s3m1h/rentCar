import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from 'src/app/models/carDetailResponseModel';
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl:string = "https://localhost:7009/api/cars/getcardetail";
  constructor(private httpClient:HttpClient) { }


  getCarDetails(): Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
