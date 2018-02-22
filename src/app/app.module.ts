import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';


// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { FlashMessagesModule } from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import {UploadFileService} from './services/upload-file.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { UnivComponent } from './components/univ/univ.component';
import { EditComponent } from './components/edit/edit.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { AddComponent } from './components/add/add.component';


import {SchoolsService} from './services/schools.service';
import { AddTelComponent } from './components/add-tel/add-tel.component';
import { AddFilieresComponent } from './components/add-filieres/add-filieres.component';
import { AddMatieresComponent } from './components/add-matieres/add-matieres.component';

// Component Imports
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'add-tel/:id', component: AddTelComponent},
  {path: 'add-filieres/:id', component: AddFilieresComponent},
  {path: 'add-matieres/:ecol/:id', component: AddMatieresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddComponent }
]

// Initialize Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyDAnMK5gNelK5l-BWQKboJO0RCgUdT16Yw',
  authDomain: 'ecoles-1758c.firebaseapp.com',
  databaseURL: 'https://ecoles-1758c.firebaseio.com',
  storageBucket: 'ecoles-1758c.appspot.com',
  messagingSenderId: '504950213804'
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    UnivComponent,
    EditComponent,
    NavBarComponent,
    SidebarComponent,
    LoginComponent,
    AddComponent,
    AddTelComponent,
    AddFilieresComponent,
    AddMatieresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireDatabase,
    SchoolsService,
    FlashMessagesService,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
