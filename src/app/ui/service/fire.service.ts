import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class FireService {
  datalist: AngularFireList<any>;
  constructor(private store: AngularFirestore, private db: AngularFireDatabase) { }
  getData() {
    this.datalist = this.db.list('notes');
    return this.datalist.snapshotChanges();
  }
  createData(){
    this.datalist.push({
      "fdafd":"fdsa"
    })
  }
}
