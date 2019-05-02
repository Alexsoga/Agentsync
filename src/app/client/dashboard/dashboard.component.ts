import { Component, OnInit,  AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers:[ClientService, AuthService]
})
export class DashboardComponent implements OnInit, AfterViewInit  {
name:any;
message:any;
num:any;
avisosTest :Observable<any>;
deliverytest :Observable<any>;
  constructor(private cli:ClientService,  public auth:AuthService, public router: Router) {
    // this.name=this.cli.getUsername();
  
   }

  myaccount(){
    this.router.navigate(['/main/myaccount/main'], { skipLocationChange: true } )
  }

  delivery(){
    this.router.navigate(['/main/delivery'],  { skipLocationChange: true })
  }
  myorder(){
    this.router.navigate(['/main/myorder'], { skipLocationChange: true })
  }
  placeorder(){
    this.router.navigate(['/main/order/placeorder'], { skipLocationChange: true })
  }
   query(){
     console.log("qury start");
     this.auth.clientqueryorderlen();
   }

   ngAfterViewInit(){
   
    this.avisosTest =this.auth.clientqueryorderlen();
    this.deliverytest=this.auth.deliverylen();
   
  
   }
  ngOnInit() {
    // this.name = this.auth
    
   
  }
 

}
