 import axios from 'axios';

 export const makeRequest = axios.create({
 	baseURL: process.env.REACT_APP_API_URL,
 	header:{
 		Authorization: "kamar"+process.env.REACT_APP_API_TOKEN,
 	},
 });