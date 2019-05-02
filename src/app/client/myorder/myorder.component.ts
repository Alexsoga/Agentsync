import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
 
  today: Date;
  orders;
  datacom;
  message;

 

  constructor(private auth:AuthService) {
    
  }
  ngOnInit() {
   this.orders = this.auth.clientqueryorderlen();
    this.datacom = this.auth.clientqueryorderlen();
    this.today = new Date(Date.now());
    console.log(this.orders);
  }


}
