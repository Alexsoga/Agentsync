import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject} from 'rxjs';
import { AuthService } from '../../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

  export interface Order {
  orderid:number;
  propertytype:string;
  street:string;
  unit:any;
  orderby:any;
  comments:any;
  accesscode:any;
  city:string;
  zip:string;
  orders:any;
  property:any;
  squarefeet:string;
  ordersprice:number
  visitingdate:Date;
  orderprice:number;
  scheduleorder:any;
  ordereddate:string;
  phonenumber:number;
  }
@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent{
  displayedColumns = ['name','number','address','date/time','ordervalue','edit/delete'];
  dataSource: MatTableDataSource<Order>; 
  visitingdate: BehaviorSubject<Date>;
  property:any;
  userid:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private afs: AngularFirestore, public dialog: MatDialog,private afauth: AngularFireAuth,private auth:AuthService) {
    
    
  }


   ngOnInit(){
   


}
  ngAfterViewInit(){
    this.userid = this.afauth.auth.currentUser.uid;
    var start=new Date(Date.now());
    var end=new Date(Date.now()+1*12*60*60*1000);
    this.afs.collection<Order>(`users/${this.userid}/orders`, ref => ref
    .where('visitingdate', '>', start)
    .where('visitingdate', '<', end)
).valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

  scheduleorder(a:any){
    console.log(a)
  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
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