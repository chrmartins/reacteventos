import firebase from 'firebase'

// Configuração do Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDkGIJWdyWHAaFcTi05EFbyEEEi9TVSGVg',
  authDomain: 'reacteventos-aa9cb.firebaseapp.com',
  databaseURL: 'https://reacteventos-aa9cb.firebaseio.com',
  projectId: 'reacteventos-aa9cb',
  storageBucket: 'reacteventos-aa9cb.appspot.com',
  messagingSenderId: '24529874014',
  appId: '1:24529874014:web:b05ef4ff47e6416ae958cf'
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
