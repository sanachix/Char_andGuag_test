import { Component, OnInit } from '@angular/core';
import { Product,GaugesService } from '@app/gauges/gauges.service';


@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss']
})
export class GaugesComponent implements OnInit {

  products:Product[];
  values:Product[];

  constructor(service:GaugesService) {
    this.products=service.getProducts();
    this.productsToValues()
   }

   productsToValues(){
     let values:any=[];

     this.products.forEach(function(product){
       if (product.active){
         values.push(product.count);
       }
     })
     this.values=values;
   }

  speedValue = 40;
  
  customizeText(arg:any){
    return arg.valueText + '%';
  }

  Palette_customizeText(arg:any){
    return arg.valueText+'mm'
  }

  Tooltip_customizeText(arg:any){
    return {
      text: "Racer" + (arg.index + 1)+ " - "+arg.valueText + "km/h"
    };
  }

  ngOnInit() {
  }

}
