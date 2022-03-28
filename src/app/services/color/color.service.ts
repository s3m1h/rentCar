import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colors:Color[] = [];
  apiUrl:string ="https://localhost:7009/api/colors/getall";
  constructor(private httpClient:HttpClient) { }

  getColors(): Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }

}
