import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../shared/client.service';
import { AuthService} from '../../shared/auth.service'
import { tap, map, take } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ ClientService]
})
export class LoginComponent implements OnInit {
  email;
  phone;
  error: { name: string, message: string } = { name: '', message: '' };
  constructor(public cli:ClientService, public auth:AuthService) { }
  login(email,password)
  {
  
       if(email=='elena@sonderworks.com'){this.cli.adminlogin(email, password).catch(_error => {
        this.error = _error;
        this.resetForm()
        return this.error
      })}else{this.cli.clientlogin(email, password).catch(_error => {
        this.error = _error;
        this.resetForm()
        return this.error
      })}
        
    
      
   
  }
  resetForm(loginform?: NgForm) {
    if (loginform != null)
      loginform.reset();
  }
  ngOnInit() {
    this.resetForm()
  }

}
