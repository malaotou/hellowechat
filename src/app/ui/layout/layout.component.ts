import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FireService } from '../service/fire.service';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  items: Observable<any[]>;
  current: string = Date.now.toString();


  constructor(private fireService:FireService,private db: AngularFireDatabase) {
    this.items = this.db.list('items').valueChanges();
  }

  ngOnInit() {
    // this.fireService.getData();
    // this.fireService.createData();
  }

}
