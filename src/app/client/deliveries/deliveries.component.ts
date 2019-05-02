import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import * as saveAs from 'file-saver';

import { map } from 'rxjs/operators';
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
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css'],
  
})
export class DeliveriesComponent implements OnInit {
orderid:any;
image:any;
dataarr = [];
slideIndex=0;
items:any;
namex:any;
xn= document.getElementById("btnnxt");
 xp= document.getElementById("btnpre");
  constructor(private route: ActivatedRoute,private afs: AngularFirestore) { 
    


   
 
    
  


  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.orderid = params.orderid;
      console.log(this.orderid)
  });
  this.items=document.querySelectorAll('.thumb img');
  var docRef$= this.afs.collection<Order>('orders').doc(this.orderid);
    
  this.image = docRef$.ref.get().then(function (doc) {
   if (doc.exists) {
     console.log("Document data:", doc.data());
    
     
    
     console.log(doc.data().Photography);
     
     return doc.data()
   } else {
     // doc.data() will be undefined in this case
     console.log("No such document!");
   }
 }).catch(function (error) {
   console.log("Error getting document:", error);
 });
 
  }

  imageLoaded(items)
 {
   console.log(items);
   console.log(items.length);
  var w = items[0].width;
  var h = items[0].height;
  var parentW = items[0].parentElement.clientWidth;
  var parentH = items[0].parentElement.clientHeight;
  if (h > parentH)
  {
  }
  else if (h < parentH)
  {
     var ele=document.getElementsByClassName("zoom");
      for(var i=0; i < ele.length; i++)
        {
         ele[i].setAttribute( "style","height:"+ parentH+'px')
         //ele[i].setAttribute("style","width:100%");
        
               
        }
       }
      }


asd(){
  var items=document.querySelectorAll('.zoom');
    console.log(items);
    console.log(items.length);
     this.imageLoaded(items);
 
}






  ngAfterViewInit(){
    
    var w = this.items[0].width;
    var h = this.items[0].height;
    var parentW = this.items[0].parentElement.clientWidth;
    var parentH = this.items[0].parentElement.clientHeight;
    if (h > parentH)
    {
    }
    else if (h < parentH)
    {
       var ele=document.getElementsByClassName("zoom");
        for(var i=0; i < ele.length; i++)
          {
           ele[i].setAttribute( "style","height:"+ parentH+'px')
           //ele[i].setAttribute("style","width:100%");
          
                 
          }
         }
 
  }
 

  
  passIndexValue(index,props){
     
       this.slideIndex = index;
       
        document.getElementById('modalimg').setAttribute('src',props);
   
   
 }
 
 
 
  plusSlides(i,propd) {
   console.log(i,propd)
     
       this.passIndexValue(i,propd);
 
 }
 
 minusSlides(i,propda)
 {
  console.log(i,propda)
   
    // document.getElementById("btnnxt").style.display = "inline-block";
this.passIndexValue(i,propda);
 
 }


































 
  

}


