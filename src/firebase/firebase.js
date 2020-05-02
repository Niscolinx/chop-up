import firebase from 'firebase'

var firebaseConfig = {
    apiKey: 'AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4',
    authDomain: 'my-react-burger-1ce01.firebaseapp.com',
    databaseURL: 'https://my-react-burger-1ce01.firebaseio.com',
    projectId: 'my-react-burger-1ce01',
    storageBucket: 'my-react-burger-1ce01.appspot.com',
    messagingSenderId: '1090815861850',
    appId: '1:1090815861850:web:4fe6264163a25f3ae0e463'

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
