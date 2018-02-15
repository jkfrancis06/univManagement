import { Component, OnInit } from '@angular/core';
import {SchoolsService} from '../../services/schools.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {University} from '../../models/University';
import {Adresses} from '../../models/Adresses';


@Component({
  selector: 'app-add-tel',
  templateUrl: './add-tel.component.html',
  styleUrls: ['./add-tel.component.css']
})
export class AddTelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
