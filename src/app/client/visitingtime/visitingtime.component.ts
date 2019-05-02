import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-visitingtime',
  templateUrl: './visitingtime.component.html',
  styleUrls: ['./visitingtime.component.css']
})
export class VisitingtimeComponent implements OnInit {
visitingdatenow;
orderprice;
  constructor(private cli: ClientService) { }
  updatetime(a){
    var datenew = new Date(this.visitingdatenow);
    datenew.setHours(a);
    datenew.setMinutes(0);
    console.log(datenew);
    this.cli.updatevisitingtime(datenew)
  }
  ngOnInit() {
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsvisitingdate.subscribe(visitingdate => { this.visitingdatenow = visitingdate });
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
  }
  add(){
    console.log();
    
  }

}
