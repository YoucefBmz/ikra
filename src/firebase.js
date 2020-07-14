import firebase from 'firebase'
import 'firebase/firestore'

const Config = {
    apiKey: "AIzaSyD4YFQuq_ozb0PJfeabaWGek2dHJTZPpr4",
    authDomain: "keriniapp.firebaseapp.com",
    databaseURL: "https://keriniapp.firebaseio.com",
    projectId: "keriniapp",
    storageBucket: "keriniapp.appspot.com",
    messagingSenderId: "397351192289",
    appId: "1:397351192289:web:220c7eced363d733dad9a0",
    measurementId: "G-E9JL273Q7G"
}


const firebaseApp = firebase.initializeApp(Config);

const firestore = firebaseApp.firestore()


export default firestore;
