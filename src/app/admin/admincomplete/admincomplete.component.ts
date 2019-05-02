import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../shared/auth.service';
export interface Order {
  Productname:string;
  deliverydate:Date;
  orderdate:Date;
  productversion:string;
  ordereddate:string;
  phonenumber:number;

}
@Component({
  selector: 'app-admincomplete',
  templateUrl: './admincomplete.component.html',
  styleUrls: ['./admincomplete.component.css']
})
export class AdmincompleteComponent {
  displayedColumns = ['name','number','address','date/time','ordervalue','no','edit/delete'];
 
  dataSource: MatTableDataSource<Order>; 
  userid:any;
property:any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private afs: AngularFirestore, public dialog: MatDialog,private afauth: AngularFireAuth,private auth:AuthService) {
    
  }
  ngOnInit(){
   
    
  }
  ngAfterViewInit() 
  {
    this.userid = this.afauth.auth.currentUser.uid;
     this.afs.collection<Order>('orders', ref => ref.where
    ('status','==', 'completed')).valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }
  scheduleorder(a:any){
    console.log(a)
  }
  query(a:any){
    console.log(a);
   var docRef$= this.afs.collection<Order>('orders').doc(a);

   this.property = docRef$.ref.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  }
  
}
 