import firebase from 'firebase'

var firebaseConfig = {

    apiKey: "AIzaSyC0ftZT-5WylSWql7hDGuBYaEfkZPBWthQ",
    authDomain: "chopup-2f24c.firebaseapp.com",
    databaseURL: "https://chopup-2f24c.firebaseio.com",
    projectId: "chopup-2f24c",
    storageBucket: "chopup-2f24c.appspot.com",
    messagingSenderId: "750911912844",
    appId: "1:750911912844:web:db94fc54d5de3ee0aab4a9",
    measurementId: "G-JEHLV22Y6T"
}

const fire = firebase.initializeApp(firebaseConfig)
export default fire
