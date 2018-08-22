import { Injectable } from '@angular/core';
import { count } from '../../../node_modules/rxjs/operators';

class Complaints {
  complaint:string;
  count:number;
}

export class ComplaintsWithPercent{
  complaint:string;
  count:number;
  cumulativePercent: number;
}

let complaintsData: Complaints[] = [{
  complaint:"Pizza is cold",
  count:780
},
  {
    complaint:"Inadequate chesse quantity",
    count:120
  },
  {
    complaint:"Not baked properly",
    count:52
  },
  {
    complaint:"Delayed delivery",
    count:1123
  },
  {
    complaint:"Damaged delivery",
    count:321
  },
  {
    complaint:"Incorrect billing",
    count:89
  },
  {
    complaint:"Wrong size delivered",
    count:222
  }
];

//--------------------------------------------Area Chart----------------------------------
export class Population{
  country:string;
  y014:number;
  y1564:number;
  y65:number;
}

let populationData: Population[] = [
  {
    country: "China",
    y014: 320866959,
    y1564: 853191410,
    y65: 87774113
  }, 

  {
    country: "India",
    y014: 340419115,
    y1564: 626520945,
    y65: 47063757
  }, 

  {
    country: "United States",
    y014: 58554755,
    y1564: 182172625,
    y65: 34835293
  },


  {
    country: "Indonesia",
    y014: 68715705,
    y1564: 146014815,
    y65: 10053690
  }, 

  {
    country: "Brazil",
    y014: 50278034,
    y1564: 113391494,
    y65: 9190842
  }, 

  {
    country: "Russia",
    y014: 26465156,
    y1564: 101123777,
    y65: 18412243
  }
];


//--------------------------------------------Spline Area-----------------------------------
export class СorporationInfo {
  company: string;
  y2005: number;
  y2004: number;
}


let corporationsInfo: СorporationInfo[] = [
  {
    company: "ExxonMobil",
    y2005: 362.53,
    y2004: 277.02
  },

  {
    company: "GeneralElectric",
    y2005: 348.45,
    y2004: 328.54
  },

  {
    company: "Microsoft",
    y2005: 279.02,
    y2004: 297.02
  },

  {
    company: "Citigroup",
    y2005: 230.93,
    y2004: 255.3
  },

  {
    company: "Royal Dutch Shell plc",
    y2005: 203.52,
    y2004: 173.54
  },

  {
    company: "Procted & Gamble",
    y2005: 197.12,
    y2004: 131.89
  }
];


//-----------------------------------------Standard Bar-----------------------------------
export class OrngData{
  day:string;
  oranges:number;
}

let orngData:OrngData[] =[
  {
    day: "Monday",
    oranges: 3
  },

  {
    day:"Tuesday",
    oranges:2

  },

  {
    day:"Wednesday",
    oranges:3
  },

  {
    day:"Thursday",
    oranges:4
  },

  {
    day:"Friday",
    oranges:6
  },

  {
    day:"Saturday",
    oranges:11
  },

  {
    day:"Sunday",
    oranges:4
  }


]

//-----------------------------------------SideXSide Bar------------------------------------
export class GrossProduct {
  state: string;
  year1998: number;
  year2001: number;
  year2004: number;
}

let grossProductData: GrossProduct[] = [
  {
    state: "Illinois",
    year1998: 423.721,
    year2001: 476.851,
    year2004: 528.904
  }, 

  {
    state: "Indiana",
    year1998: 178.719,
    year2001: 195.769,
    year2004: 227.271
  }, 

  {
    state: "Michigan",
    year1998: 308.845,
    year2001: 335.793,
    year2004: 372.576
  }, 

  {
    state: "Ohio",
    year1998: 348.555,
    year2001: 374.771,
    year2004: 418.258
  }, 

  {
    state: "Wisconsin",
    year1998: 160.274,
    year2001: 182.373,
    year2004: 211.727
  }
];

//-----------------------------------------Stacked Bar---------------------------------------
export class MaleAgeStructure {
  state: string;
  young: number;
  middle: number;
  older: number;
}

let maleAgeData: MaleAgeStructure[] = [
  {
    state: "Germany",
    young: 6.7,
    middle: 28.6,
    older: 5.1
  }, 

  {
    state: "Japan",
    young: 9.6,
    middle: 43.4,
    older: 9
  }, 

  {
    state: "Russia",
    young: 13.5,
    middle: 49,
    older: 5.8
  }, 

  {
    state: "USA",
    young: 30,
    middle: 90.3,
    older: 14.5 
  }
];

//-----------------------------------------Drill Down Chart-----------------------------------
export class DataItem {
  arg: string;
  val: number;
  parentID: string;
}

let colors: string[]=["#6babac", "#e55253"]

let data: DataItem[] = [
  { arg: "Asia", val: 3007613498, parentID: "" },
  { arg: "North America", val: 493603615, parentID: "" },
  { arg: "Europe", val: 438575293, parentID: "" },
  { arg: "Africa", val: 381331438, parentID: "" },
  { arg: "South America", val: 331126555, parentID: "" },
  { arg: "Nigeria", val: 181562056, parentID: "Africa" },
  { arg: "Egypt", val: 88487396, parentID: "Africa" },
  { arg: "Congo", val: 77433744, parentID: "Africa" },
  { arg: "Morocco", val: 33848242, parentID: "Africa" },
  { arg: "China", val: 1380083000, parentID: "Asia" },
  { arg: "India", val: 1306687000, parentID: "Asia" },
  { arg: "Pakistan", val: 193885498, parentID: "Asia" },
  { arg: "Japan", val: 126958000, parentID: "Asia" },
  { arg: "Russia", val: 146804372, parentID: "Europe" },
  { arg: "Germany", val: 82175684, parentID: "Europe" },
  { arg: "Turkey", val: 79463663, parentID: "Europe" },
  { arg: "France", val: 66736000, parentID: "Europe" },
  { arg: "United Kingdom", val: 63395574, parentID: "Europe" },
  { arg: "United States", val: 325310275, parentID: "North America" },
  { arg: "Mexico", val: 121005815, parentID: "North America" },
  { arg: "Canada", val: 36048521, parentID: "North America" },
  { arg: "Cuba", val: 11239004, parentID: "North America" },
  { arg: "Brazil", val: 205737996, parentID: "South America" },
  { arg: "Colombia", val: 48400388, parentID: "South America" },
  { arg: "Venezuela", val: 30761000, parentID: "South America" },
  { arg: "Peru", val: 28220764, parentID: "South America" },
  { arg: "Chile", val: 18006407, parentID: "South America" }
];

//------------------------------------------Auto Calc Bar Width--------------------------------
export class AC_CountryInfo {
  state: string;
  oil: number;
  gas?: number; //does the question mark mean that these members are not required?
  coal?: number;
}

let AC_countriesInfo: AC_CountryInfo[]  = [{
  state: "China",
  oil: 4.95,
  gas: 2.85,
  coal: 45.56
}, {
  state: "Russia",
  oil: 12.94,
  gas: 17.66,
  coal: 4.13
}, {
  state: "USA",
  oil: 8.51,
  gas: 19.87,
  coal: 15.84
}, {
  state: "Iran",
  oil: 5.3,
  gas: 4.39
}, {
  state: "Canada",
  oil: 4.08,
  gas: 5.4
}, {
  state: "Saudi Arabia",
  oil: 12.03
}, {
  state: "Mexico",
  oil: 3.86
}];

//-------------------------------------------Doughnut Bar---------------------------------------
export class PopulationByRegion {
  region: string;
  val: number;
}

let DN_populationByRegions: PopulationByRegion[] = [{
  region: "Asia",
  val: 4119626293
}, {
  region: "Africa",
  val: 1012956064
}, {
  region: "Northern America",
  val: 344124520
}, {
  region: "Latin America and the Caribbean",
  val: 590946440
}, {
  region: "Europe",
  val: 727082222
}, {
  region: "Oceania",
  val: 35104756
}];

@Injectable({
  providedIn: 'root'
})

export class DrillDownService{
  filterData(name:any):DataItem[]{
    return data.filter(function(item)
    {return item.parentID===name;});
  }
}



export class ChartsService {
  //do not understand what this function does 
  getComplaintsData():ComplaintsWithPercent[]{
    var data = complaintsData.sort(function(a,b){
      return b.count-a.count;
    }),

    totalCount = data.reduce(function(preValue,item){
      return preValue + item.count;
    }, 0),
    cumulativeCount=0;
    return data.map(function(item,index){
      cumulativeCount += item.count;
      return {
        complaint:item.complaint,
        count:item.count,
        cumulativePercent:Math.round(cumulativeCount*100/totalCount)
      };
    });

  }

  getPopulationData(): Population[]{
    return populationData
  }

  getCorporationsInfo(): СorporationInfo[] {
    return corporationsInfo;
  }

  getOrngData():OrngData[]{
    return orngData;
  }

  getGrossProductData(): GrossProduct[] {
    return grossProductData;
  }

  getMaleAgeData(): MaleAgeStructure[] {
    return maleAgeData;
  }

  getColors():string[]{
    return colors;
  }

  getAC_CountriesInfo(): AC_CountryInfo[] {
    return AC_countriesInfo;
  }

  getPopulationByRegions(): PopulationByRegion[] {
    return DN_populationByRegions;
  }

}
