import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operator/timeout';
import {University} from '../../models/University';
import { FlashMessagesService } from 'angular2-flash-messages';
import {SchoolsService} from '../../services/schools.service';
import {Adresses} from '../../models/Adresses';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  univ: University = {
    name : '',
    fullname: '',
    adress: '',
    lat: '',
    long: '',
  }

  nb_adresses : number;

  tel: Adresses = {
    tel: ''
  }

  constructor(public flashMessagesService: FlashMessagesService,public schoolservice: SchoolsService, public router: Router) { }
  ngOnInit() {
  }

  onSubmit({value, valid}: {value: University, valid: boolean}) {
    console.log(value);
    this.schoolservice.addUniv(value);
    console.log('Valid');

    console.log(value.$key);
    // this.router.navigate(['/add-tel/' + value.$key]);
  }

}
