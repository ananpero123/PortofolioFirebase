import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentData, DocumentSnapshot, Firestore, collection, collectionData,doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { Porto } from '../Model/Porto';

@Component({
  selector: 'app-read-portofolio',
  templateUrl: './read-portofolio.component.html',
  styleUrls: ['./read-portofolio.component.css']
})
export class ReadPortofolioComponent implements OnInit {
  userId: string | null = null;
  userData: DocumentData  = {};

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId) {
        this.getData();
        console.log(this.userId);
        
      }
    });
  }

  async getData() {
    const docRef = doc(this.firestore, `portofolio/${this.userId}`);
    const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
    if (docSnap.exists()) {
      this.userData = docSnap.data();
    } else {
      console.log('Document not found!');
    }
  }

}
