import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
unit:any;
  constructor(private cli:ClientService) {
    
   }
  gotoplaceorder()
  {
    this.cli.gotoplaceorder()
  }
inc()
{
  if(this.unit < 10)
  {
    this.unit = this.unit + 1;
  }
  
}
dec()
{
  if(this.unit>1)
  {
    this.unit = this.unit - 1;
  }
}
  unitssubmit()
  {
  this.cli.setappartmentunit(this.unit)
  }
  ngOnInit() {
    this.cli.bsappartmentunit.subscribe(appartmentunit=>{this.unit = appartmentunit})  }

}
