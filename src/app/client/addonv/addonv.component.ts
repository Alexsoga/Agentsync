import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-addonv',
  templateUrl: './addonv.component.html',
  styleUrls: ['./addonv.component.css']
})
export class AddonvComponent implements OnInit {
vcommunityshots:any;
vtwlightshotsh:any;
vrushfee:any;
vaddonarray:Array<any>=[];
vaddonprice=null;
  constructor(private cli:ClientService) { 
    
  }
  pushvcs(e:any,a:any) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vcommunityshots !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vcommunityshots;
      }

      this.vaddonarray.push([a, this.vcommunityshots])
      console.log(this.vaddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vcommunityshots !== "customprice") {
        this.vaddonprice = this.vaddonprice - this.vcommunityshots;

      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
        }
      }
      console.log(this.vaddonarray);
    }


  }
  pushvts(e:any,a:any) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vtwlightshotsh !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vtwlightshotsh;
      }
      
      this.vaddonarray.push([a, this.vtwlightshotsh])
      console.log(this.vaddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vtwlightshotsh !== "customprice") {
        this.vaddonprice = this.vaddonprice - this.vtwlightshotsh;

      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
        }
      }
      console.log(this.vaddonarray);
    }


  }
  pushvrf(e:any,a:any) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vrushfee !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vrushfee;
      }
      
      this.vaddonarray.push([a, this.vrushfee])
      console.log(this.vaddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vrushfee !== "customprice") {
        this.vaddonprice = this.vaddonprice - this.vrushfee;

      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
        }
      }
      console.log(this.vaddonarray);
    }


  }
  ngOnInit() {
    this.cli.bsvcommunityshots.subscribe(vcommunityshots=>{this.vcommunityshots = vcommunityshots});
    this.cli.bsvtwlightshots.subscribe(vtwlightshots => { this.vcommunityshots = vtwlightshots});
    this.cli.bsvrushfee.subscribe(vrushfee=>{this.vrushfee = vrushfee});

  }

}
