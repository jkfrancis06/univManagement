import { Component, OnInit } from '@angular/core';
import {SchoolsService} from '../../services/schools.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Matieres} from '../../models/matieres';

@Component({
  selector: 'app-add-matieres',
  templateUrl: './add-matieres.component.html',
  styleUrls: ['./add-matieres.component.css']
})
export class AddMatieresComponent implements OnInit {

  id: string;
  ecol: string;
  matieres: Matieres = {
    name: ''
  };
  mat: any[];

  constructor(public route: ActivatedRoute, public router: Router,public schoolService: SchoolsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.ecol = this.route.snapshot.params['ecol'];
    console.log(this.id, this.ecol);

    /*this.schoolService.getMatieres().subscribe(
      matieres => {
        this.mat = matieres;
        console.log(this.mat);
      });*/
  }

  onSubmit({value, valid}: {value: Matieres, valid: boolean}) {
    console.log(value);
    // let key = this.schoolService.addFiliere(this.id, value);
    //  console.log('ok');
   // this.router.navigate(['/add-matieres/' + key]);
  }

}
