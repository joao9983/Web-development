import axios from "axios";
//60830285/json
const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
