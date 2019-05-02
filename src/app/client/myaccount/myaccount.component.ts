import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'],
 
})
export class MyaccountComponent implements OnInit {
query;
invoicelist;
  constructor(private router: Router,private auth:AuthService) { }
  invoice() {
    this.router.navigate(['/main/myaccount/invoice'])
  }
  pay() {
    this.router.navigate(['/main/myaccount/pay'])
  }
  payment() {
    this.router.navigate(['/main/myaccount/paymentinfo'])
  }
  editprofile() {
    this.router.navigate(['/main/myaccount/editprofile'])
  }
  ngOnInit() {
    this.invoicelist=this.auth.deliverylen()
  }

}
