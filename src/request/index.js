import axios from 'axios';
let service=axios.create({
    baseURL:'http://122.112.160.19:3000',
    timeout:2000

})
export default service