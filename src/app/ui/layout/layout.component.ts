import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FireService } from '../service/fire.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  notes$: any;
  current: string = Date.now.toString();


  constructor(private fireService:FireService) {

  }

  ngOnInit() {
    this.fireService.getData();
    this.fireService.createData();
  }

}
