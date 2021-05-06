import { decode, encode } from 'base-64';
import './timerConfig';
global.addEventListener = (x) => x;
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAOWHBpPhKoNhcGFKHH_Q_0AtL2gV-imgQ',
//   authDomain: 'production-a9404.firebaseapp.com',
//   databaseURL: 'https://production-a9404.firebaseio.com',
//   projectId: 'production-a9404',
//   storageBucket: 'production-a9404.appspot.com',
//   messagingSenderId: '525472070731',
//   appId: '1:525472070731:web:ee873bd62c0deb7eba61ce',
// };          origin  modified stanica

const firebaseConfig = {

  apiKey: "AIzaSyBk32CVBFIY5r6f-bjvrBJps4Fo5jaJbHw",
  authDomain: "lovelysingdating.firebaseapp.com",
  databaseURL: 'https://lovelysingdating.firebaseio.com',
  // databaseURL: "https://lovelysingdating-default-rtdb.firebaseio.com",
  projectId: "lovelysingdating",
  storageBucket: "lovelysingdating.appspot.com",
  messagingSenderId: "292974749429",
  appId: "1:292974749429:web:5199dd5ff62d8cff8e87bc",
  measurementId: "G-N7YQG575BE"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
