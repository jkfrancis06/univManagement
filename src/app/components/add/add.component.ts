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

  constructor(public flashMessagesService: FlashMessagesService,public schoolservice: SchoolsService, public router: Router) { }
  ngOnInit() {
  }

  onSubmit({value, valid}: {value: University, valid: boolean}) {
    console.log(value);
    const temp = this.schoolservice.addUniv(value);
    console.log('Valid');
    this.router.navigate(['/add-tel/' + temp]);
  }

}
