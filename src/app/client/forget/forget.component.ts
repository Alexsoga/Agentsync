import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
  
})
export class ForgetComponent  {
value:string;
  constructor(public auth:AuthService) { }
  
  ngOnInit() {
  }
  forget(value)
  {
   
    this.auth.forgetemail(value);
    
  }

}
