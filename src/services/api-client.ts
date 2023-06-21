import axios , { CanceledError }from "axios";

export default axios.create({
    params:{
        key: '014d419f9571439486bc5872acb1fc3e'
    },
    baseURL: 'https://api.rawg.io/api',
    headers: {
    }
});

export {CanceledError};