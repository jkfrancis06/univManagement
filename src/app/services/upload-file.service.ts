import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {SchoolsService} from './schools.service';
import {University} from '../models/University';
import {FileUpload} from '../models/fileupload';
import * as firebase from 'firebase';
import {tick} from "@angular/core/testing";


@Injectable()
export class UploadFileService {

  constructor(private db: AngularFireDatabase, public schoolservice: SchoolsService) {}

  private basePath = '/uploads';
  unversity: any;
  key: string;


  pushFileToStorage(fileUpload: FileUpload, progress: {percentage: number}, univ ) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
    this.unversity = univ;
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL
        fileUpload.name = fileUpload.file.name
        this.saveFileData(fileUpload);
      }
    );
  }

  private saveFileData(fileUpload: FileUpload) {
    this.unversity.picUrl = fileUpload.url;
    this.unversity.picName = fileUpload.name;
    console.log(this.unversity);
    this.key = this.schoolservice.addUniv(this.unversity);
    console.log(this.key);
    // this.db.list(`${this.basePath}/`).push(fileUpload);
  }


  public getKey() {
    return this.key;
  }

}
