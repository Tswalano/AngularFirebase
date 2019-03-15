import { Injectable } from '@angular/core';
import * as firebase from 'firebase/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isSuccess: boolean;
  response: any;

  constructor() { }

  login(email, password): void {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user: firebase.auth.UserCredential) => {
      //  User successfully signin
        this.isSuccess = true;
        this.response = '';
      })
      .catch((error: firebase.FirebaseError) => {
        // Error Occured
        this.isSuccess = false;
        this.response = error.message;
      });
  }
}
