import { Component, OnInit } from '@angular/core';
import {SchoolsService} from '../../services/schools.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Filiere} from '../../models/Filiere';

@Component({
  selector: 'app-add-filieres',
  templateUrl: './add-filieres.component.html',
  styleUrls: ['./add-filieres.component.css']
})
export class AddFilieresComponent implements OnInit {

  id: string;
  filiere: Filiere = {
    name: '',
    fullname: '',
    cycle: '',
    matieres : ''
  }

  constructor(public route: ActivatedRoute, public router: Router,public schoolService: SchoolsService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

  }

  onSubmit({value, valid}: {value: Filiere, valid: boolean}) {
    console.log(value);
    const key = this.schoolService.addFiliere(this.id, value);
    console.log('ok');
    this.router.navigate(['/add-matieres/' + this.id + '/' + key]);
  }

}
