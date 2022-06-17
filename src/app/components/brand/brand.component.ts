import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  currentBrand:Brand;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
      this.brandService.getBrands().subscribe(b=>{this.brands = b.data});
  }
  getCurrentBrandClass(brand:Brand){
    if(brand ==this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  setCurrentBrand(brand:Brand){
    
      this.currentBrand = brand;
  }

}
