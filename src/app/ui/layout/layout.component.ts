import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  notes$: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.notes$ = db.collection('notes').valueChanges();
  }

  ngOnInit() {
  }

}
