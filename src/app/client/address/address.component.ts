import { Component, OnInit, Host } from '@angular/core';
import {
 
  
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ClientService } from '../../shared/client.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  

})
export class AddressComponent implements OnInit {
  propertyss:string;
 propertytype:string;
 address:Object;
 street:string;
 city:string;
 zip:string;
 appartmentunitno:string;
 totalunits:string;
 isAppartment:boolean;
 addressformgroup: FormGroup;
constructor(private cli : ClientService, private _formbuilder : FormBuilder){
this.isAppartment = false;
// this.propertytype = "Appartment"
  if (this.street != '' || this.street != null) {
   
  }
}
  
  get af() { return this.addressformgroup.controls; }
    pl()
    {
      this.cli.gotoplaceorder();
    }
  Onaddresssubmit()
  {
    console.log(this.addressformgroup.value);
    this.cli.updateaddress(this.addressformgroup.value)
  }
 
  
  ngOnInit() {
      this.addressformgroup  = this._formbuilder.group({
     
        street : ['', Validators.required],
      
        city: ['',Validators.required],

      zipCode: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]{5}$')])],

        unit:['']
        
      
    })
    this.cli.bspropertytype.subscribe(propertytype => {this.propertytype = propertytype;} );
    this.cli.bsstreet.subscribe(street => { this.street = street });
    this.cli.bscity.subscribe(city=>{this.city=city});
    this.cli.bszip.subscribe(zip=>{this.zip = zip});
    this.cli.bsappartmentunitno.subscribe(appartmentunitno=>{this.appartmentunitno = appartmentunitno});
    if(this.street != '' || this.street != null)
    {
      this.addressformgroup.controls['street'].setValue(this.street)
    }
    if(this.city != '' || this.city != null)
    {
      this.addressformgroup.controls['city'].setValue(this.city)
    }
    if (this.zip != '' || this.zip != null) {
      this.addressformgroup.controls['zipCode'].setValue(this.zip)
    }
  
    if(this.propertytype === "Appartment")
    {
      this.isAppartment = true;
      if (this.appartmentunitno != '' || this.appartmentunitno != null) {
        this.addressformgroup.controls['unit'].setValue(this.appartmentunitno)
      }
    }
  }
  
  


}
