import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator} from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { DatePipe } from '@angular/common';
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
  ordereddate:string;
  phonenumber:number;
}
@Component({
  selector: 'app-adminpending',
  templateUrl: './adminpending.component.html',
  styleUrls: ['./adminpending.component.css'],
  providers: [DatePipe]
})
export class AdminpendingComponent {
  displayedColumns = ['name','number','address','date/time','ordervalue','no','edit/delete'];
 
  dataSource: MatTableDataSource<Order>; 

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  downloadurl: Observable<string>;
  uploadPercent:Observable<number>;
  property:any;
  photographyurl:any;
  uploads: any[];
  userid:any;
  profile:any;
  progressBarValue;
  allPercentage: Observable<any>;
  files: Observable<any>;
  constructor(private afauth: AngularFireAuth,private afs: AngularFirestore, public dialog: MatDialog,public storage: AngularFireStorage) {
    
  }
  ngOnInit(){
   
    
  }
  ngAfterViewInit() 
  {
   
     this.afs.collection<Order>('orders', ref => ref.where
    ('status','==','pending' )).valueChanges().subscribe(data => {
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
  });AnalyserNode
  }
  singleimageupload(productname:any,event:any,orderid:any,userid:any){
    const date=new Date();
 var urlarray=[];
 var namearray=[];
     const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
    //const file = event.target.files[0];
    const filelist = event.target.files;
    for (const file of filelist) {
    const filePath = orderid+'/'+productname+'/'+fulldate+'/'+file.name;
    this.uploadPercent = this.storage.upload(filePath, file).percentageChanges();
    const task = this.storage.upload(filePath, file).then(()=>{
      const fileRef = this.storage.ref(filePath);
     
    
      const getDownloadURLl=fileRef.getDownloadURL().subscribe(url=>
      {
        const URL=url;
       
        urlarray.push(url);
        namearray.push(file.name);
        console.log(namearray)
          console.log(urlarray);
         console.log(file.name)
          console.log(productname)
          if(productname=='Photography')
          {
            this.afs.collection('orders').doc(orderid).update({
            Photography:urlarray,
            imagename:namearray
      })
     
      this.afs.collection(`users/${userid}/orders`).doc(orderid).update({
          
        Photography:urlarray,
        imagename:namearray
        
      
    })
  

    }
    else if(productname=='Video Tour')
    {
      this.afs.collection('orders').doc(orderid).update({
      Videotour:urlarray
})

this.afs.collection(`users/${userid}/orders`).doc(orderid).update({
    
  Videotour:urlarray
  

})

    }
    else{
      this.afs.collection('orders').doc(orderid).update({
        Tour360:urlarray
  })

  this.afs.collection(`users/${userid}/orders`).doc(orderid).update({
      
   Tour360:urlarray
    
  
  })
      
    }
          
        
      })
      

    }
  
  )
  const uploadTask=this.storage.upload(filePath, file);
  uploadTask.percentageChanges().subscribe((value) => {
    this.progressBarValue = value.toFixed(2);
  })
 
}

  }
 
update(a:any){
   this.afs.collection('orders').doc(a).update({
    status: 'completed'
  }).then(() => {
   
  })
  this.afs.collection(`users/${this.userid}/orders`).doc(a).update({
    status: 'completed'
  }).then(() => {
    alert('updated');
  })

}
delete(b:any) {
  this.afs.collection('orders').doc(b).delete().then(() => {
    
  })
  this.afs.collection(`users/${this.userid}/orders`).doc(b).delete().then(() => {
    alert('deleted');
  })
}

}


  
