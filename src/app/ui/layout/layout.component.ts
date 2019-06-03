import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  notes$: Observable<{}>;
  current:string=Date.now.toString();
  constructor(store: AngularFirestore,db:AngularFireDatabase) {
    this.notes$ =db.object('notes').valueChanges();
  }

  ngOnInit() {
  }

}
