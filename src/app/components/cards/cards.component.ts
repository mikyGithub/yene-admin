import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import {finalize} from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';
import { AppSetting } from 'src/app/model/app-setting';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  {
  @Input() data:AppSetting = {};
  loading = false;
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {}

  // Update Point and CTA Label
  onChangeInput(event:any,type:string) {
    const query = event.target.value;
    const data = type==='point'?{point:query}:{ctaLabel:query};
    this.db.collection('app-setting').doc('kxQ1QnyR1ztbJG7fupS0').update(data);
  }

  // Upload File
  onFileSelected(event:any,type:string) {
    var n = Date.now();
    const filePath = type==='bg'?`back-ground/${n}`:`hero/${n}`;
    const file = event.target.files[0];
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.loading = true;
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
            if(url){
              this.updateStore(url,type);
            }
        });
      })
    ).subscribe();

  }

  // Update Image Url after Upload
  updateStore(url:string,type:string){
    const data = type==='bg'?{bgUrl:url}:{heroUrl:url};
    this.db.collection('app-setting').doc('kxQ1QnyR1ztbJG7fupS0').update(data);
  }

}
