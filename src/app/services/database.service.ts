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
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    // this.usersCol = this.afs.collection('users');
    // this.users = this.usersCol.snapshotChanges();
  }

  getUser(userid: string | undefined) {
    // this.userDoc = this.afs.doc('users/' + userid + '.json');
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
