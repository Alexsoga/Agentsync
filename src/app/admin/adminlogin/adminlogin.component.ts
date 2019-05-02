import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers: [ClientService]
})
export class AdminloginComponent implements OnInit {
  error: { name: string, message: string } = { name: '', message: '' };
  constructor(public cli: ClientService) { }
  login(email:any, password:any) {
    this.cli.adminlogin(email, password).catch(_error => {
      this.error = _error;
      this.resetForm()
      return this.error
    })}

    resetForm(loginform ?: NgForm) {
      if (loginform != null)
        loginform.reset();
    }
  
  ngOnInit() {
  this.resetForm()
  }

}
