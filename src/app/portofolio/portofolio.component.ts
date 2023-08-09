import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Porto } from '../Model/Porto';
import { ApinampilService } from '../Services/apinampil.service';
import { Firestore, collection, addDoc,collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  userData!: Observable<any>;

  constructor(private firestore:Firestore){
    this.getData();
  }

  getData(){
    const colectionInstance = collection(this.firestore, 'portofolio')
    collectionData(colectionInstance, {idField: 'id'}).subscribe(val => {
      console.log(val);
    })

    this.userData = collectionData(colectionInstance, {idField: 'id'});
  }

  ngOnInit(): void {
    
  }
}





