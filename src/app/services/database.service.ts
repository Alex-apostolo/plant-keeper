import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface UserID extends User {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  usersCol: any;
  users: any;

  userDoc: any;
  user: any;

  listingDoc: any;
  listing: any;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {}

  getListing(listingid: string | undefined) {
    // this.userDoc = this.afs.collection('/users').doc(listingid).valueChanges();
    // this.user = this.userDoc.valueChanges();
    return this.afs.collection('/listings').doc(listingid).valueChanges();
  }

  getUser(userid: string | undefined) {
    this.userDoc = this.afs.collection('/users').doc(userid);
    this.user = this.userDoc.valueChanges();
    return this.user;
  }

  getUsers() {
    this.usersCol = this.afs.collection('/users');
    this.users = this.usersCol.valueChanges({ idField: 'id' });
    return this.users;
  }

  testPostUser() {
    // this.http.post('/users.json',{userid})
  }

  createUser() {
    var err = this.afs.collection('users').add({
      first_name: 'Andreas',
      last_name: 'Lemesios',
      email: 'testing123@gmail.com',
      password: 'testing123',
    });
  }
}
