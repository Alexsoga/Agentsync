import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css'],
  

})
export class PlaceorderComponent implements OnInit {
  propertytype:string;
  constructor(private client:ClientService,private router:Router) { 
   
  } 
  upbuilding(build) {
   
    if(build ==="Appartment")
    {
      this.router.navigate(["main/order/units"], { skipLocationChange: true })
      this.client.setpropertytype(build)
    }
    else{
      this.router.navigate(['main/order/address'], { skipLocationChange: true })
      this.client.setpropertytype(build)
    }
  }
  ngOnInit() {
   
  }

}
