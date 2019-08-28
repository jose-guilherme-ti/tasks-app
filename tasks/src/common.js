import { Alert, Platform } from 'react-native';


const server = Platform.OS === 'ios' ?
   // 'http://10.9.6.93:3000' : 'http://10.9.6.93:3000';
   //'http://10.0.3.2:3000' : 'http://10.0.3.2:3000';
    'https://apifindcode.herokuapp.com' : 'https://apifindcode.herokuapp.com';
function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem:${err}`)
}


export { server, showError }