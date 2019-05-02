import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {
  propertytype;
  squarefeet;
  invoicelist;
  appartmentunit;
  street;
  city;
  zip;
  appartmentunitno;
  orderprice;
  visitingdatenow;
  comment;
  accessproperty;
  accesspropertycode='';
  orderarray;
  ordersarray;
  ordersuarray;
  orderspricearray;
  ordersupricearray;
  paddonsuarray;
  paddonsupricearray;
  vaddonsuarray;
  vaddonsupricearray;
  paddonarray = [];
  paddonsarray = [];
  paddonspricearray = [];
  vaddonarray = [];
  vaddonsarray = [];
  vaddonspricearray = [];
  ispaddonarray:boolean;
  isvaddonarray:boolean;
  orderdata:any;
  constructor(private cli:ClientService,private router:Router,private auth:AuthService) { }

  ngAfterViewInit()
  {
    this.invoicelist=this.auth.deliverylen()
  }
  submit(){
    this.orderdata = {
      propertytype: this.propertytype,
      squarefeet: this.squarefeet,
      address:{
        street:this.street,
        city:this.city,
        zip:this.zip,
        unit:this.appartmentunitno,
      },
      orders:this.ordersuarray,
      orderspricearray: this.ordersupricearray,
      orderprice:this.orderprice,
      meetingtype:this.accessproperty,
      accesscode:this.accesspropertycode,
      visitingdate:this.visitingdatenow,
      comments: this.comment,
      ordereddate:Date.now(),
      Photographyaddons: this.paddonsuarray,
      Photographyaddonsprice: this.paddonsupricearray,
     Videoaddons: this.vaddonsuarray,
     VideoaddonsPrice: this.vaddonsupricearray,
    
   
    }
    console.log(this.orderdata);
    this.cli.update(this.orderdata)
  }
  reload(){

    location.reload(true);
    
  }
  ngOnInit() {
    this.cli.bsstreet.subscribe(street => { this.street = street;});
    this.cli.bscity.subscribe(city => { this.city = city });
    this.cli.bszip.subscribe(zip => { this.zip = zip });
    this.cli.bsappartmentunitno.subscribe(appartmentunitno=>{this.appartmentunitno = appartmentunitno});
    this.cli.bsaccessproperty.subscribe(accessproperty=>{this.accessproperty = accessproperty});
    this.cli.bsaccesspropertycode.subscribe(accesspropertycode=>{this.accesspropertycode = accesspropertycode});
    this.cli.bsorderarray.subscribe(orderarray => { this.orderarray = orderarray });
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsvisitingdate.subscribe(visitingdate => { this.visitingdatenow = visitingdate });
    this.cli.bscomment.subscribe(comment => { this.comment = comment });
    this.cli.bssquarefeet.subscribe(squarefeet => { this.squarefeet = squarefeet });
    this.cli.bspropertytype.subscribe(propertytype=>{this.propertytype = propertytype;});
    this.cli.bsordersarray.subscribe(ordersarray=>{this.ordersarray = ordersarray});
    this.cli.bsorderspricearray.subscribe(orderspricearray=>{this.orderspricearray = orderspricearray});
   
    console.log(this.orderdata+"is this");
    console.log("order" );
    console.log(this.ordersarray);
    console.log("price"+this.orderspricearray);
   
    this.ordersuarray = this.cli.oarray;
    this.ordersupricearray = this.cli.opricearray;
    this.paddonsuarray = this.cli.paddarray;
    console.log(this.paddonsuarray);

    this.paddonsupricearray = this.cli.paddpricearray;
    console.log(this.paddonsupricearray);
    this.vaddonsuarray = this.cli.vaddarray;
    this.vaddonsupricearray = this.cli.vaddpricearray;
    if (this.paddonsuarray.length > 0) {
      this.ispaddonarray = true;

    }
    if (this.vaddonsuarray.length > 0) {
      this.isvaddonarray = true;

    }
  }

}