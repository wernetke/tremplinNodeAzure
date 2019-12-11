import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class EtudiantService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getEtudiant() {
    return this
      .http
      .get(`${this.url}/etudiants`);
  }

  createEtudiant(data) {
    this.http.post(`${this.url}/etudiants`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('L Etudiant à été importé avec succès.', 'Success');
          this.router.navigateByUrl('/etudiant');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
