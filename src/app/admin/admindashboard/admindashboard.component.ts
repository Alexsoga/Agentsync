import { Component, OnInit } from '@angular/core';
import { AdminGuard } from '../../shared/admin.guard';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  providers:[AdminGuard]
})
export class AdmindashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
