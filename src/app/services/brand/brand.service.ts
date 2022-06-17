import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { CarDetailService } from '../carDetail/car-detail.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl:string = "https://localhost:7009/api";
  constructor(private httpClient:HttpClient) { }


  getBrands():Observable<BrandResponseModel>{
      let newPath = this.apiUrl + "/brands/getall";
      return this.httpClient.get<BrandResponseModel>(newPath);
  }
}


