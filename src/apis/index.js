import axios from "axios";

const loginedApi = axios.create({
  baseURL: "https://uat.c2mdr.com/c2mydrrestdemo/v1/c2mdapi/",
});


export default loginedApi;
