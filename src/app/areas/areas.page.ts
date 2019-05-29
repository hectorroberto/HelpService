import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Areas } from './Models/areas.model';
import { AreasService } from './services/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.page.html',
  styleUrls: ['./areas.page.scss'],
})
export class AreasPage implements OnInit {


  areas$: Observable<Areas[]>;

  constructor(private areasService: AreasService) { }

  ngOnInit() {
    this.areas$ =  this.areasService.getAll();
  }

}
