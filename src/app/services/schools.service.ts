import { Injectable } from '@angular/core';
import {University} from '../models/University';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';






@Injectable()
export class SchoolsService {


  universities: FirebaseListObservable<University[]>;
  univ: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {

    this.universities = this.af.list('/') as FirebaseListObservable<University[]>;

  }

  getUniv() {
    return this.universities;
  }

  addUniv(univ) {
    this.universities.push(univ);
  }

  loadUniv(id){
    this.univ = this.af.object('/' + id) as FirebaseObjectObservable<University>;

    return this.univ;
  }

  deleteSchool(id){
    return this.universities.remove(id);
  }

  updateSchool(id, value) {
      return this.universities.update(id, value);
  }

}
