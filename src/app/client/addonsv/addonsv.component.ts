import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-addonsv',
  templateUrl: './addonsv.component.html',
  styleUrls: ['./addonsv.component.css']
})
export class AddonsvComponent implements OnInit {
  vcommunityshots:any;
  vtwlightshots:any;
  vrushfee:any;
  checkbackvideo:any;

  orders: Array<any>;
  ordersprice: Array<any>;
  vaddonarray: Array<any> = [];
  orderarray:Array<any>=[];
  vaddonsarray: Array<any> = [];
  vaddonsprice: Array<any> = [];
  vaddonprice:any;
  orderprice:any;
  total:any;
  constructor(private cli: ClientService) {

  }

  vaddonsupdated()
  {
    console.log(this.orderarray);
    console.log(this.ordersprice);
    console.log(this.orders);
    this.cli.setvaddonsarray(this.vaddonarray)
    this.cli.settotalprice(this.total)
    this.cli.setorderprice(this.total)
  }
  pushvcs(e:any, a:any) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vcommunityshots !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vcommunityshots;
        this.total = this.total + 50;
      }

      this.vaddonarray.push([a, this.vcommunityshots])
      this.vaddonsarray.push(a),
        this.vaddonsprice.push(this.vcommunityshots)
      console.log(this.vaddonarray);console.log(this.vaddonsarray); console.log(this.vaddonsprice);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vcommunityshots !== "customprice") {
        this.total = this.total - 50;
        this.vaddonprice = this.vaddonprice - this.vcommunityshots;
       
      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
          this.vaddonsarray.splice(i)
          this.vaddonsprice.splice(i)
        }
      }
      console.log(this.vaddonarray); console.log(this.vaddonsarray); console.log(this.vaddonsprice);
    }


  }
  pushvts(e:any, a:any) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vtwlightshots !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vtwlightshots;
        this.total = this.total + 50;
      }

      this.vaddonarray.push([a, this.vtwlightshots])
      this.vaddonsarray.push(a),
        this.vaddonsprice.push(this.vtwlightshots)
      console.log(this.vaddonarray); console.log(this.vaddonsarray); console.log(this.vaddonsprice);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vtwlightshots !== "customprice") {
        this.total = this.total - 50;
        this.vaddonprice = this.vaddonprice - this.vtwlightshots;
        
      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
          this.vaddonsarray.splice(i)
          this.vaddonsprice.splice(i)
        }
      }
      console.log(this.vaddonarray); console.log(this.vaddonsarray); console.log(this.vaddonsprice);
   }


  }
  pushvrf(e:any, a:any) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vrushfee !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vrushfee;
        this.total = this.total + 75;
      }

      this.vaddonarray.push([a, this.vrushfee])
      this.vaddonsarray.push(a),
        this.vaddonsprice.push(this.vrushfee)
      console.log(this.vaddonarray); console.log(this.vaddonsarray); console.log(this.vaddonsprice);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vrushfee !== "customprice") {
        this.total = this.total - 75;
        this.vaddonprice = this.vaddonprice - this.vrushfee;
     
      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
          this.vaddonsarray.splice(i)
          this.vaddonsprice.splice(i)
        }
      }
      console.log(this.vaddonarray); console.log(this.vaddonsarray); console.log(this.vaddonsprice);
     }

  }

  ngOnInit() {
    this.cli.bsvcommunityshots.subscribe(vcommunityshots => { this.vcommunityshots = vcommunityshots });
    this.cli.bsvtwlightshots.subscribe(vtwlightshots => { this.vtwlightshots = vtwlightshots });
    this.cli.bsvrushfee.subscribe(vrushfee => { this.vrushfee = vrushfee });
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsvaddonprice.subscribe(vaddonprice => { this.vaddonprice = vaddonprice });
    this.cli.bsordersarray.subscribe(ordersarray => { this.orders = ordersarray });
    this.cli.bsorderspricearray.subscribe(orderspricearray => { this.ordersprice = orderspricearray });
    this.cli.bsorderarray.subscribe(orderarray => { this.orderarray = orderarray });
    this.cli.bsvaddonsearray.subscribe(vaddonsearray => { this.vaddonsarray = vaddonsearray })
    this.cli.bsvaddonspricearray.subscribe(vaddonspricearray => { this.vaddonsprice = vaddonspricearray });

    console.log(this.orderprice);
    console.log(this.vaddonprice + "is paddon");
    if (this.orderprice != 'customprice') {
      this.total = this.orderprice + this.vaddonprice;
    } else {
      this.total = this.orderprice;
    }


  
  }


}
