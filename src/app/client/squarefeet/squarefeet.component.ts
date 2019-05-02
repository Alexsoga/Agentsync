import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-squarefeet',
  templateUrl: './squarefeet.component.html',
  styleUrls: ['./squarefeet.component.css']
})
export class SquarefeetComponent implements OnInit {
  propertytype: string;
  squarefeet : string;
  sqft:string;
  street:string;
  city:string;
  zip:string;
  orderprice:any;
  appartmentunitno:string;
  message:string;
  is0750sel:boolean;
  is751sel:boolean;
  is1501sel:boolean;
  is2251sel:boolean;
  is3001sel:boolean;
  is3751sel:boolean;
  is4501sel:boolean;
  is5251sel:boolean;
  constructor(private cli: ClientService) { 
    this.sqft = this.squarefeet;
   
     
   
  }
  updatesqft(e, unit)
  {
    // 
    // this.cli.gotoproducts();
    var classList = e.target.classList;
    var className = e.target.className;
    console.log(classList);
    console.log(className);
    if(className.includes('btn1'))
    {
      classList.add('btns');
      classList.remove('btn1')
      console.log(unit)
      this.cli.setsquarefeet(unit)
      this.sqft = this.squarefeet;
      this.cli.gotoproducts();
    
    }else if (className.includes('btns')) {
      classList.add('btn1');
      classList.remove('btn1')
      this.cli.setsquarefeet('Not updated')
      this.sqft = this.squarefeet;
    }
    
  }
  checksqft()
  {
    if(this.squarefeet ==='Not updated')
    {
     this.message="Please update squarefeet";
    }
    else{
      
      this.cli.gotoproducts();
    }
    
  }
  ngOnInit() {
    this.cli.bspropertytype.subscribe(propertytype => { this.propertytype = propertytype; });
    this.cli.bssquarefeet.subscribe(squarefeet =>{ this.squarefeet = squarefeet});
    this.cli.bsstreet.subscribe(street => {this.street = street});
    this.cli.bscity.subscribe(city => { this.city = city });
    this.cli.bszip.subscribe(zip=>{this.zip = zip});
    console.log(this.squarefeet +"issgft");
    
    if (this.squarefeet == '751-1500') {
      this.is751sel = true;
    }
    if (this.squarefeet == '1501-2250') {
      this.is1501sel = true;
    }
    if (this.squarefeet == '2251-3000') {
      this.is2251sel = true;
    }
    if (this.squarefeet == '3001-3750') {
      this.is3001sel = true;

    }
    if (this.squarefeet == '3751-4500') {
      this.is3751sel = true;
    }
    if (this.squarefeet == '4501-5250') {
      this.is4501sel = true;
    }
    if (this.squarefeet == '5251+') {
      this.is5251sel = true;
    }
  
  }
 
 
}
