import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss']
})
export class GaugesComponent implements OnInit {

  constructor() { }

  speedValue = 40;
  
  customizeText(arg:any){
    return arg.valueText + '%';
  }

  ngOnInit() {
  }

}
