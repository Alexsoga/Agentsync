import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Component } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
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

}
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent  {
  task: any;
  ref:any;
  property:any;
  orders:any;
  userid:any;
  constructor(private cli: ClientService, private router: Router,private auth:AuthService,private afs: AngularFirestore,private afauth: AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afauth.auth.currentUser.uid; 
    console.log("userid"+this.userid);
   
    
  }
  ngAfterViewInit(){
  
  const start=new Date();
    const end=new Date();
    end.setSeconds(end.getSeconds() + 60);
    console.log(end);
    console.log(start);
//     this.afs.collection<Order>(`users/${this.userid}/orders`, ref => ref
//     .where('ordereddate', '>', start)
//     .where('ordereddate', '<', end)
// )
//     .get()
//     .subscribe(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
this.afs.collection<Order>('orders',ref => ref.where
('uid','==', this.userid).where
('status','==', 'pending')).get().subscribe(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              const user= doc.data();
              console.log(user);
          });
      })
      
    this.orders= this.afs.collection<Order>('orders', ref => ref.where
    ('status','==', 'completed')).valueChanges();

    
    
  }
  query(orderid:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         orderid
      }
  };
  this.router.navigate(['main/image'], navigationExtras);

  }
  downloadzip(propy, file) {
    console.log(propy);
    console.log(file);
    var zip = new JSZip();
    var count = 0;
    var zipFilename = "Pictures.zip";
  var links=propy;
    links.forEach(function (url, i) {
      var filename = links[i];
      filename = file[i];
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(url, function (err, data) {
        if (err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, { binary: true });
        count++;
        if (count == links.length) {
          zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, zipFilename);
          });
        }
        console.log(count);
      });
    });
  }
 
}
