import { Component, OnInit } from '@angular/core';
import { ComplaintsWithPercent, ChartsService, Population, OrngData, GrossProduct, MaleAgeStructure, DataItem, DrillDownService, AC_CountryInfo, PopulationByRegion } from '@app/charts/charts.service';
import { PercentPipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  dataSource:any;
  populationData:Population[];
  corporationsInfo:any[];
  orngData:OrngData[];
  DD_Service:DrillDownService;
  grossProductData:GrossProduct[];
  maleAgeStruct:MaleAgeStructure[];
  DD_Countries:DataItem[];
  colors:string[];
  isFirstLevel:boolean;
  AC_countriesInfo:AC_CountryInfo[];
  DN_populationByRegions:PopulationByRegion[];

  pipe:any=new PercentPipe("en-US");
  
  constructor(service:ChartsService,service2:DrillDownService) { 
    this.dataSource= service.getComplaintsData();
    this.populationData=service.getPopulationData();
    this.corporationsInfo=service.getCorporationsInfo();
    this.orngData=service.getOrngData();
    this.grossProductData=service.getGrossProductData();
    this.maleAgeStruct= service.getMaleAgeData();
    this.DD_Countries=service2.filterData("");
    this.colors=service.getColors();
    this.isFirstLevel=true;
    this.DD_Service = service2
    this.AC_countriesInfo=service.getAC_CountriesInfo();
    this.DN_populationByRegions=service.getPopulationByRegions();
  }

  //I do no understand what "=>" means/does?
  //this will customize the value at the end of the a guage or bar since that is what a tooltip is 
  customizeTooltip = (info:any)=>{
    return{
      html:"<div><div class ='tooltip-header'>"+ 
      info.argumentText + "</div>" + 
      "<div class='tooltip-body'><div class='series-name'>" +
      info.points[0].seriesName + ":</div><div class='value-text'>"+
      info.points[0].valueText + "</div><div class= 'series-name'>"+
      info.points[1].seriesName + ":</div><div class='value-text'>"+
      info.points[1].valueText + "% </div></div></div>"
    };
  }

  customizeLabelText=(info:any)=>{
    return info.valueText+"%"
  }

  onPointClick(e:any){
    e.target.select();
  }

  StackedBarToolTip(arg:any){
    return{text:arg.seriesName + 'years: '+ arg.valueText};
  }
  
  onButtonClick(){
    if(!this.isFirstLevel){
      this.isFirstLevel=true;
      this.DD_Countries=this.DD_Service.filterData("")
    }
  }

  DD_onPointClick(e:any){
    if(this.isFirstLevel){
      this.isFirstLevel=false;
      this.DD_Countries=this.DD_Service.filterData(e.target.originalArgument);
    }
  }

  customizePoint=()=>{
    let pointSettings:any;

    pointSettings={
      color:this.colors[Number(this.isFirstLevel)]
    };

    if(!this.isFirstLevel){
      pointSettings.hoverStyle ={
        hatching:"none"
      };
    }

    return pointSettings
  }

  DN_customizeTooltip = (arg:any)=>{
    return{text:arg.valueText+ " - " + this.pipe.transform(arg.percent,"1.2-1")};
  }

  DN_pointClickHandler(arg:any){
    arg.target.select();
  }


  ngOnInit() {
  }

}
