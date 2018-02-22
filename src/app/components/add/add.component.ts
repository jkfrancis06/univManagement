import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operator/timeout';
import {University} from '../../models/University';
import { FlashMessagesService } from 'angular2-flash-messages';
import {SchoolsService} from '../../services/schools.service';
import {Adresses} from '../../models/Adresses';
import {Router} from '@angular/router';
import {UploadFileService} from '../../services/upload-file.service';
import {FileUpload} from '../../models/fileupload';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

  univ: University = {
    name : '',
    fullname: '',
    adress: '',
    picName: '',
    picUrl: ''
  };
  key: string;


  constructor(private uploadService: UploadFileService,
              public flashMessagesService: FlashMessagesService,
              public schoolservice: SchoolsService,
              public router: Router) { }
  ngOnInit() {
  }

  onSubmit({value, valid}: {value: University, valid: boolean}) {
    console.log(this.univ)
    this.upload();
    this.router.navigate(['/add-tel/' + this.key]);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0)
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.univ);
    this.key = this.uploadService.key;
  }

}
