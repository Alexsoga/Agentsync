import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { User } from '../../shared/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ClientService]
})
export class RegisterComponent implements OnInit {
 
  error: { name: string, message: string } = { name: '', message: '' };
  constructor(public cli: ClientService, public router:Router) { }
  register(registerForm:User)
  {
    this.cli.register(registerForm).catch(_error=>{
     this.error = _error;
    
      return this.error
   })
   
  }
  resetForm(registerForm?: NgForm) {
    if (registerForm != null)
      registerForm.reset();
  }
  ngOnInit() {
    this.resetForm();
  }

}