import { Component, OnInit, ViewChild ,  HostListener} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {AgentService} from '../../shared/agent.service';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router'; 

import { ClientService } from '../../shared/client.service';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import {environment} from '../../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

declare var require: any;
import { AngularFireAuth } from '@angular/fire/auth';
import * as Stripe from 'stripe';
declare var StripeCheckout:any;
@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.css']
})
export class MakepaymentComponent implements OnInit {
  userid:any;
  orderid:any;
  propertytype;
  squarefeet;
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
  elements: Elements;
  card: StripeElement;
 
 
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };
 
  stripeTest: FormGroup;
  handler: any;
  amount = 500;
  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentSvc:AgentService,
    private cli:ClientService,private afs: AngularFirestore,private afauth: AngularFireAuth,
    private router:Router, private route: ActivatedRoute, ) {}
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.orderid = params.orderid;
      console.log(this.orderid)
  });
    // this.stripeTest = this.fb.group({
    //   name: ['', [Validators.required]],
    //   amount:['', [Validators.required]],
    // });
    // this.stripeService.elements(this.elementsOptions)
    //   .subscribe(elements => {
    //     this.elements = elements;
    //     // Only mount the element the first time
    //     if (!this.card) {
    //       this.card = this.elements.create('card', {
    //         style: {
    //           base: {
    //             iconColor: '#666EE8',
    //             color: '#31325F',
    //             lineHeight: '40px',
    //             fontWeight: 300,
    //             fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    //             fontSize: '18px',
    //             '::placeholder': {
    //               color: '#CFD7E0'
    //             }
    //           }
    //         }
    //       });
    //       this.card.mount('#card-element');
    //     }
    //   });
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
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://agentsync-79f55.firebaseapp.com/assets/image/icons/SWLogo_clarge.png',
      locale: 'auto',
      token: token => {
        this.paymentSvc.processPayment(token, this.amount)
      }
    });
  }
 
  // buy() {
  //   const name = this.stripeTest.get('name').value;
    
  //   this.stripeService
  //     .createToken(this.card, { name  })
  //     .subscribe(result => {
  //       if (result.token) {
  //         var stripe = new Stripe("sk_test_aQyFOt7WdqJHQO0Vk2UlMAfE");
  //         const token = result.token;  
  //         (async () => {
  //           const customer: Promise<Stripe.customers.ICustomer> = await stripe.customers.create({
  //             email: 'foo-customer@example.com'
  //           }).then((customer) => {
  //             return stripe.customers.createSource(customer.id, {
  //               source: 'tok_visa'
  //             });
  //           }).then((source) => {
  //             return stripe.charges.create({
  //               amount: 1600,
  //               currency: 'usd',
  //               customer: source.customer
  //             });
  //           })
           
  //         })();
  //         console.log(result.token);
         
  //       } else if (result.error) {
         
  //         console.log(result.error.message);
  //       }
  //     });
  // }
  handlePayment() {
    this.handler.open({
      name: 'SonderWorks',
      excerpt: 'Deposit Funds to Account',
      amount: this.orderprice*100
    });
    this.router.navigate(['/main/order/completeorder'], { skipLocationChange: true })
    this.userid = this.afauth.auth.currentUser.uid; 
    console.log("userid"+this.userid);
   
    this.afs.collection('orders').doc(this.orderid).update({
     payment: 'true'
    }).then(() => {
     
    })
    this.afs.collection(`users/${this.userid}/orders`).doc(this.orderid).update({
      payment: 'true'
    }).then(() => {
      
    })
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
      
    }
  // openCheckout() {
  //   var handler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_xbmbdOE0H7Yxp1cKWNt3n2ou',
  //     locale: 'auto',
  //     token: function (token: any) {
  //       console.log(token)
  //     }
  //   });

  //   handler.open({
  //     name: 'Demo Site',
  //     description: '2 widgets',
  //     amount: 2000
  //   });

  // }
}