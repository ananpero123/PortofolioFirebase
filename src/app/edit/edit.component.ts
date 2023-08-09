import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, DocumentSnapshot, DocumentData, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { Porto } from '../Model/Porto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = 'Project_Portofolio';
  userId: string | null = null;
  userData: DocumentData  = {};

  constructor(private route: ActivatedRoute, private firestore: Firestore) {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId) {
        this.getData();
        console.log(this.userId);
        
      }
    });
  }

  async ngOnInit() {
    
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

  async saveData() {
    if (this.userData && this.userId) {
      const docRef = doc(this.firestore, 'portofolio', this.userId);
      await updateDoc(docRef, this.userData);
      
      console.log('Data updated successfully!111');
    }
  }

  

  onChange = ($event : Event)  => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);

    this.convertToBase64(file)
  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    });

    observable.subscribe((d) => {
      this.userData['foto'] = d
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }
    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    }
  }


  
  
}

