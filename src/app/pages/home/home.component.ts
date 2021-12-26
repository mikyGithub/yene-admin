import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.data = this.db
      .collection('app-setting')
      .doc('kxQ1QnyR1ztbJG7fupS0')
      .valueChanges()
      .subscribe((val) => {
        this.data = val;
      });
  }
}
