import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-visitingdate',
  templateUrl: './visitingdate.component.html',
  styleUrls: ['./visitingdate.component.css'],
})
export class VisitingdateComponent implements OnInit {
  visitingdatefg:NgForm;
  visitingdatenow:Date;
  visiting:Date
  total;
  formatDate;
  orderprice;
  minDate = new Date(Date.now() + (5 * 24 * 60 * 60 * 1000));
  maxDate = new Date(Date.now() + (120 * 24 * 60 * 60 * 1000));
  Onvisitingsubmit(visitingdatefg)
  {
    var visitingdate = visitingdatefg.controls['visitingdate'].value;
    console.log(visitingdate);
    this.visitingdatenow = visitingdate;
    this.visiting= visitingdate;
    this.cli.updatevisiting(this.visiting)
    this.cli.updatevisitingdate(this.visitingdatenow)
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  constructor(private cli:ClientService) { }

  ngOnInit() {
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsvisitingdate.subscribe(visitingdate =>{this.visitingdatenow = visitingdate});
    this.cli.bsvisiting.subscribe(visiting=> this.visiting=visiting);
  }
}
