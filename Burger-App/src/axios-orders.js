import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cpsc362-burger-app.firebaseio.com/'
})

export default instance;