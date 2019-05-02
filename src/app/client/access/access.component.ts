import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  message:string;
  accessForm:NgForm;
  meettype:string;
  total:any;
  ngForm:any;
  code:string;
  orderprice:any;
  codeshow:boolean;
  constructor(private cli:ClientService) {
    
   }
  checkbackaccess()
  {
    this.cli.gotoproducts()
  }
  checkaccess()
  {
    if (this.meettype == 'Meet agent on site' || this.meettype == 'Others') {
      this.cli.gotovisitingdate();
    }
    else {
      this.message = "Please update your meeting type";
    }
  }
  accesssubmit(accessForm:any)
  {
    var accesscode = accessForm.controls['code'].value;
    
     console.log(accesscode);
    if (this.meettype == 'Meet agent on site' || this.meettype =='Others')
    {
      this.cli.gotovisitingdate();
    }

    else if(this.meettype == 'Lockbox' || this.meettype == 'Access code')
    {
      if (accesscode == 'No Code' || accesscode != null) {
        this.cli.setaccesspropertycode(accesscode);
        this.cli.gotovisitingdate();
      } else {
        this.message = "Please enter the code";
      }
    }
    else {
      this.message = "Please update your meeting type";
    }
   
    
  }
  
  meet(a:any)
  {
    if (a == 'Meet agent on site' || a =='Others')
    {
      this.cli.setaccessproperty(a);
      this.cli.setaccesspropertycode('No Code');
      this.cli.gotovisitingdate()
    }else
    {
      this.cli.setaccessproperty(a)
    }
  }
  ngOnInit() {
    
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsaccessproperty.subscribe(accessproperty=>{this.meettype= accessproperty});
    this.cli.bsaccesspropertycode.subscribe(accesspropertycode => { this.code = accesspropertycode });
    this.total = this.orderprice;
    if (this.code == 'No Code' || this.code ==null)
    {
      this.codeshow= false;
    }else {
      this.codeshow= true;
    }
  }

}