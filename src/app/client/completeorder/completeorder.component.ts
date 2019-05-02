import { Component, OnInit,Compiler,  AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';

import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import{take} from 'rxjs/operators';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-completeorder',
  templateUrl: './completeorder.component.html',
  styleUrls: ['./completeorder.component.css'],
  providers:[ClientService, AuthService]
})
export class CompleteorderComponent implements OnInit {
  orderlist :Observable<any>;
 orderprice:any;
 order:any;
 userid:any;
 send:any;
 orderdata:any;
  constructor(private cli:ClientService, private router:ActivatedRoute, public auth:AuthService,private router1:Router, private Router:Router, private db: AngularFireDatabase, private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{
      this.order=params;
    })
    
    this.userid = this.afAuth.auth.currentUser.uid; 
   
    
  
    
  }
  Sendpush(a:any){
    console.log("token",a)
    // location.reload();
    this.userid = this.afAuth.auth.currentUser.uid; 
    const DBS= this.db.object(`notifications/${this.userid}/sample`);
      const usersdata = {
          title: "Sonder Works",
          body:`Thank you for your order`,
          tokenid: a,
      }

      return DBS.update(usersdata);

  }
  ngAfterViewInit(){
   
     this.orderlist =this.auth.clientqueryorderlen();
     var docRef$= this.afs.collection('users').doc(this.userid);

   this.send = docRef$.ref.get().then(function (doc) {
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
