import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/';
import {User} from 'firebase';
import {Users} from '../../Models/users';

const config = {
  apiKey: 'AIzaSyDiVrR1GJ7ksc-XTIIrtaJOB-bx7nmJeWE',
  authDomain: 'fir-tutorial-73db2.firebaseapp.com',
  databaseURL: 'https://fir-tutorial-73db2.firebaseio.com',
  projectId: 'fir-tutorial-73db2',
  storageBucket: 'fir-tutorial-73db2.appspot.com',
  messagingSenderId: '470532382665'
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users;

  constructor() {
  }

  ngOnInit() {
    // Initialize Firebase
    const app = firebase.initializeApp(config);
    console.log('Hello');
    console.log(app);
  }

  register(val) {
    console.log();
  }






}
