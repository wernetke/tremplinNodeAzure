
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { MatieresComponent } from './matieres/matieres.component';
import {MatiereService} from "./matieres/matiere.service";
import { AjoutMatiereComponent } from './ajout-matiere/ajout-matiere.component';

import { EtudiantComponent } from './etudiant/etudiant.component';
import {EtudiantService} from "./etudiant/etudiant.service";
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';

import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";

const appRoutes: Routes = [
  { path: 'matiere', component: MatieresComponent },
  { path: 'ajout-matiere', component: AjoutMatiereComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'ajout-etudiant', component: AjoutEtudiantComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MatieresComponent,
    AjoutMatiereComponent,
    EtudiantComponent,
    AjoutEtudiantComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [
    MatiereService,
    EtudiantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
