import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  avisosTest:Observable<any>;
  constructor(private cli: ClientService, private auth:AuthService) { }

  ngOnInit() {


  }
  ngAfterViewInit(){
   this.avisosTest=this.auth.clientqueryorderlen();
   
    
   }
  signout()
  {
    this.cli.signout()
  }
}
