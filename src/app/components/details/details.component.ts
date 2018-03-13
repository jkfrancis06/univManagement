import { Component, OnInit } from '@angular/core';
import {SchoolsService} from '../../services/schools.service';
import {Params, ActivatedRoute , Router} from '@angular/router';
import {University} from '../../models/University';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  univ: University;
  adress: any;
  filieres: any;

  constructor( public route: ActivatedRoute, public router: Router,public schoolService: SchoolsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.schoolService.loadUniv(this.id).subscribe(
      univ => {
        this.univ = univ;

        console.log(this.univ);
      }
    );

    this.schoolService.loadUnivAdress(this.id).subscribe(
      adress => {
        this.adress = adress;
      }
    );

    this.schoolService.loadUnivFilieres(this.id).subscribe(
      filiere => {
        this.filieres = filiere;

        console.log(this.filieres);
      }
    );

    console.log(this.adress);
  }

  onDeleteClick() {
    if (confirm('Are you sure you want to delete this client?')) {
      this.schoolService.deleteSchool(this.id);
      this.router.navigate(['/']);
    }
  }

}
