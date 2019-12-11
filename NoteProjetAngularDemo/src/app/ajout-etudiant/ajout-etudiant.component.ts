import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant/etudiant.service';
import {Etudiant} from "../etudiant/etudiant.interface";

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {

  etudiants: Etudiant = {
    id_etudiant: null,
    matricule: '',
    nom: '',
    prenom: ''
  };

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
  }

  createEtudiant(data: Etudiant) {
    this.etudiantService.createEtudiant(data);
  }

}
