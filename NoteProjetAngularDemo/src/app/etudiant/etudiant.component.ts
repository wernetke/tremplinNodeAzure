import { Component, OnInit } from '@angular/core';
import {EtudiantService} from './etudiant.service';
import {Etudiant} from './etudiant.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants: Etudiant[];

  constructor(private etudiantService: EtudiantService, private router: Router) { }

  ngOnInit() {
    this.etudiantService
      .getEtudiant()
      .subscribe((data: Etudiant[]) => {
        this.etudiants = data;
      });
  }

  goToAddEtudiant () {
    this.router.navigateByUrl('/ajout-etudiant');
  }

}
