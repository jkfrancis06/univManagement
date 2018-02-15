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

  id: string;
  univ: University;
  adress: Adresses = {
    tel1: '',
    tel2: '',
    mail: '',
    adress: '',
    localIndication: '',
    long: '',
    lat: '',
  }

  constructor(public route: ActivatedRoute, public router: Router,public schoolService: SchoolsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.schoolService.loadUniv(this.id).subscribe(
      univ => {
        this.univ = univ;

        console.log(this.univ);
      }
    );

  }

  onSubmit({value, valid}: {value: Adresses, valid: boolean}) {
    console.log(value);
    this.schoolService.addAdress(this.id, value);
    this.router.navigate(['/add-filieres/' + this.id]);
  }

}
