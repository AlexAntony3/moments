import axios from "axios";

axios.defaults.baseURL = 'https://drfapialex-42db2e0685e2.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();