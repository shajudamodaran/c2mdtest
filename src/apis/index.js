import axios from "axios";

const loginedApi = axios.create({
  baseURL: "https://uat.c2mdr.com/c2mydrrestuat/v1/c2mdapi/",
});


export default loginedApi;



export const c2mdApi = axios.create({
  baseURL: "https://uat.c2mdr.com/c2mydrrestuat/v1/c2mdapi/",

});

