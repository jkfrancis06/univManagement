import { Component, OnInit } from '@angular/core';
import {SchoolsService} from '../../services/schools.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {University} from '../../models/University';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;

  univ : University = {
    name : '',
    fullname: '',
    adress: '',
    lat: '',
    long: ''
  }

  constructor( public schoolservice: SchoolsService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.schoolservice.loadUniv(this.id).subscribe(
      univ => {
        this.univ = univ;
      }
    );
  }

  onSubmit({value, valid}: {value: University, valid: boolean}) {
    console.log(value);
    this.schoolservice.updateSchool(this.id, value);
    this.router.navigate(['/details/' + this.id]);
  }

}
