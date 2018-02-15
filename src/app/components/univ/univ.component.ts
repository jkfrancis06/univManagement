import { Component, OnInit } from '@angular/core';
import {University} from '../../models/University';
import {SchoolsService} from '../../services/schools.service';

@Component({
  selector: 'app-univ',
  templateUrl: './univ.component.html',
  styleUrls: ['./univ.component.css']
})
export class UnivComponent implements OnInit {

  univ: any[];

  constructor(public UnivService: SchoolsService ) {}

  ngOnInit() {

    this.UnivService.getUniv().subscribe(
      universities => {
        this.univ = universities;
        console.log(this.univ);
      });

  }

}
