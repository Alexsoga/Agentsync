import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-addonv',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {
pcommunityshots;
ptwlightshots;
prushfee;
orderarray:Array<any>;
orders: Array<any>;
ordersprice:Array<any>;
paddonarray:Array<any>=[];
paddonsarray:Array<any>=[];
paddonsprice:Array<any>=[];
paddonprice:any;
orderprice;
total;

  ordersarray:Array<any>=[]
  constructor(private cli:ClientService) { 
   
    
  }
  paddonsupdated()
  {
  
    console.log(this.paddonarray); console.log(this.paddonsprice);
    this.cli.setpaddonsarray(this.paddonarray, this.orderarray)
  
    this.cli.settotalprice(this.total)
    this.cli.setorderprice(this.total)
  }
  pushpcs(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.pcommunityshots !== "customprice") {

        this.paddonprice = this.paddonprice + this.pcommunityshots;
        this.total = this.total + 50;
      }

      this.paddonarray.push([a, this.pcommunityshots])
      this.paddonsarray.push(a),
        this.paddonsprice.push(this.pcommunityshots)
      console.log(this.paddonarray);console.log(this.paddonsarray); console.log(this.paddonsprice);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.pcommunityshots !== "customprice") {
        this.total = this.total - 50;
        this.paddonprice = this.paddonprice - this.pcommunityshots;
       
      }


      for (var i = 0; i < this.paddonarray.length; i++) {
        if (this.paddonarray[i][0] == a) {
          this.paddonarray.splice(i, 1);
          this.paddonsarray.splice(i)
          this.paddonsprice.splice(i)
        }
      }
      console.log(this.paddonarray); console.log(this.paddonsarray); console.log(this.paddonsprice);
    }


  }
  pushpts(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.ptwlightshots !== "customprice") {

        this.paddonprice = this.paddonprice + this.ptwlightshots;
        this.total = this.total + 50;
      }

      this.paddonarray.push([a, this.ptwlightshots])
      this.paddonsarray.push(a),
        this.paddonsprice.push(this.ptwlightshots)
      console.log(this.paddonarray); console.log(this.paddonsarray); console.log(this.paddonsprice);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.ptwlightshots !== "customprice") {
        this.total = this.total - 50;
        this.paddonprice = this.paddonprice - this.ptwlightshots;
        
      }


      for (var i = 0; i < this.paddonarray.length; i++) {
        if (this.paddonarray[i][0] == a) {
          this.paddonarray.splice(i, 1);
          this.paddonsarray.splice(i)
          this.paddonsprice.splice(i)
        }
      }
      console.log(this.paddonarray); console.log(this.paddonsarray); console.log(this.paddonsprice);
   }


  }
  pushvrf(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.prushfee !== "customprice") {

        this.paddonprice = this.paddonprice + this.prushfee;
        this.total = this.total + 75;
      }

      this.paddonarray.push([a, this.prushfee])
      this.paddonsarray.push(a),
        this.paddonsprice.push(this.prushfee)
      console.log(this.paddonarray); console.log(this.paddonsarray); console.log(this.paddonsprice);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.prushfee !== "customprice") {
        this.total = this.total - 75;
        this.paddonprice = this.paddonprice - this.prushfee;
     
      }


      for (var i = 0; i < this.paddonarray.length; i++) {
        if (this.paddonarray[i][0] == a) {
          this.paddonarray.splice(i, 1);
          this.paddonsarray.splice(i)
          this.paddonsprice.splice(i)
        }
      }
      console.log(this.paddonarray); console.log(this.paddonsarray); console.log(this.paddonsprice);
     }

  }
  ngOnInit() {
   
    
    this.cli.bspcommunityshots.subscribe(pcommunityshots=>{this.pcommunityshots = pcommunityshots});
    this.cli.bsptwlightshots.subscribe(ptwlightshots=>{this.ptwlightshots = ptwlightshots});
    this.cli.bsprushfee.subscribe(prushfee=>{this.prushfee = prushfee});
    this.cli.bsorderprice.subscribe(orderprice=>{this.orderprice = orderprice});
    this.cli.bspaddonprice.subscribe(paddonprice=>{this.paddonprice = paddonprice});
    this.cli.bsordersarray.subscribe(ordersarray => { this.orders = ordersarray });
    this.cli.bsorderspricearray.subscribe(orderspricearray => { this.ordersprice = orderspricearray });
    this.cli.bsorderarray.subscribe(orderarray=>{this.orderarray = orderarray});
    
    this.cli.bspaddonsearray.subscribe(paddonsearray=>{this.paddonsarray = paddonsearray})
    this.cli.bspaddonspricearray.subscribe(paddonspricearray=>{this.paddonsprice = paddonspricearray});
    console.log(this.orderprice);
    console.log(this.paddonprice+"is paddon");
    console.log(this.orders);
    console.log(this.ordersprice);
    console.log(this.cli.oarray);
    console.log("orray");
    if(this.orderprice != 'customprice')
    {
      this.total = this.orderprice + this.paddonprice;
    }else
    {
      this.total = this.orderprice;
    }
   
    
           }
          }