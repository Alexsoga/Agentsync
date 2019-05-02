import { Injectable } from '@angular/core';
import {order} from '../shared/admin';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  dataSource: MatTableDataSource<order>; 
  constructor() { }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }
}
