import { Injectable } from '@angular/core';
import {University} from '../models/University';
import {Adresses} from '../models/Adresses';
import {Filiere} from '../models/Filiere';
import {Matieres} from '../models/matieres';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';






@Injectable()
export class SchoolsService {


  universities: FirebaseListObservable<University[]>;
  univ: FirebaseObjectObservable<any>;

  adresses: FirebaseListObservable<Adresses[]>
  filieres: FirebaseListObservable<Filiere[]>
  matieres: FirebaseListObservable<Matieres[]>

  constructor(public af: AngularFireDatabase) {

    this.universities = this.af.list('/') as FirebaseListObservable<University[]>;

  }

  getUniv() {
    return this.universities;
  }

  addUniv(univ) {
    const temp = this.universities.push(univ);
    return(temp.key);
  }

  loadUniv(id){
    this.univ = this.af.object('/' + id) as FirebaseObjectObservable<University>;

    return this.univ;
  }

  loadUnivAdress(id){
    this.adresses = this.af.list('/' + id + '/adresses') as FirebaseListObservable<Adresses[]>;
    return this.adresses;
  }

  loadUnivFilieres(id){
    this.filieres = this.af.list('/' + id + '/filieres') as FirebaseListObservable<Filiere[]>
    return this.filieres;
  }

  deleteSchool(id) {
    return this.universities.remove(id);
  }

  updateSchool(id, value) {
      return this.universities.update(id, value);
  }

  addAdress(id, value) {
      this.adresses = this.af.list('/' + id + '/adresses') as FirebaseListObservable<Adresses[]>;
      this.adresses.push(value);
  }

  addFiliere(id, value) {
    this.filieres = this.af.list('/' + id + '/filieres') as FirebaseListObservable<Filiere[]>;
    const temp = this.filieres.push(value);
    return(temp.key);
  }

  getMatieres (ecol, id) {
    this.matieres = this.af.list('/' + ecol + '/filieres/' + id + '/matiere' ) as FirebaseListObservable<Matieres[]>;
    return this.matieres;
  }

  addMatierer(ecol, id, value) {
    this.matieres = this.af.list('/' + ecol + '/filieres/' + id + '/matiere' ) as FirebaseListObservable<Matieres[]>;
    this.matieres.push(value);
  }





}
