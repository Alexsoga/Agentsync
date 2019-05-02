import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AgentService {
  userId: string;

  
 
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) this.userId = auth.uid
    });
  }


   processPayment(token: any, amount: number) {
     const payment = { token, amount }
     return this.db.list(`/payments/${this.userId}`).push(payment)
   }

}