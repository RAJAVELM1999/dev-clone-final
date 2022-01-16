import store from '@/store'
// import axios from 'axios'
const axios = require('axios');


store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'SET_TOKEN':
            // console.log(mutation.payload);
            if (mutation.payload) {
                // debugger; // eslint-disable-line no-debugger 
                // axios.defaults.headers.common['Authorization'] = 'Barear ${mutation.payload}'
                axios.defaults.headers.common = '${mutation.payload}'
                localStorage.setItem('token', mutation.payload)
            }
            else {
                axios.defaults.headers.common = null
                localStorage.removeItem('token')
            }
            break;

        case 'SET_USER':
            // console.log(mutation.payload);
            if (mutation.payload) {
                // debugger; // eslint-disable-line no-debugger 
                // axios.defaults.headers.common['Authorization'] = 'Barear ${mutation.payload}'
                axios.defaults.headers.common = '${mutation.payload}'
                localStorage.setItem('user', mutation.payload)
            }
            else {
                axios.defaults.headers.common = null
                localStorage.removeItem('user')
            }
            break;
    }
    // console.log(mutation);
})