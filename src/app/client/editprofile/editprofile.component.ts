
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

import{ AngularFireStorage} from '@angular/fire/storage';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],

})
export class EditprofileComponent implements OnInit {
  downloadURL : Observable<string | null>;
  profilepicRef: any;
  uid;
  property:any;
  name: any;
  email: any;
  phone: any;
  profile: any;
  brokerage: any;
  userid:any;
  phonenumber: number;
  url:any;
  empty;
  uploads: any[];
  allPercentage: Observable<any>;
  files: Observable<any>;
 
  constructor (private afAuth : AngularFireAuth,private afStorage: AngularFireStorage, private cli: ClientService, private auth:AuthService,private afs: AngularFirestore,public storage: AngularFireStorage) {}
   
    upload(event) {
      this.userid = this.afAuth.auth.currentUser.uid;
      console.log(this.userid);
      this.uploads = [];
    const filelist = event.target.files;
    const allPercentage: Observable<number>[] = [];

    for (const file of filelist) {

      const path = this.auth.currentUserId+'/'+this.auth.displayName;
      const ref = this.storage.ref(path);
      const task = this.storage.upload(path, file);
      const _percentage$ = task.percentageChanges();
      allPercentage.push(_percentage$);

      // create composed object with different information. ADAPT THIS ACCORDING YOUR NEED
      const uploadTrack = {
        fileName: file.name,
        percentage: _percentage$
      }

      // push each upload into the array
      this.uploads.push(uploadTrack);

      // for every upload do whatever you want in firestore with the uploaded file
      const _t = task.then((f) => {
        return f.ref.getDownloadURL().then((url) => {
          return this.afs.doc(`users/${this.userid}`).update({
            name: f.metadata.name,
            url: url
          });
        })
      })

    }
  
    }
    
   
    
  ngOnInit() {
    this.name=this.auth.displayName;
    this.email=this.auth.email;
    this.profile = this.auth.users$;
  }
  
}
 
