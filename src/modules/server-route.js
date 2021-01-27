// I'll update this file in the future to request the API key in
// the server rather than the front-end files -- env only works
// with express or backend stuff

/* eslint-disable prefer-destructuring */
// import dotenv from 'dotenv'
// dotenv.config();
// const express = require('express');
// const Datastore = require('nedb');
// require('dotenv').config({ path: `${__dirname}/.env` });

// const app = express();
// const database = new Datastore('database.db');
// database.loadDatabase();

// app.get('/api', (request, response) => {
// 	database.find({}, (err, data) => {
// 		if (err) {
// 			response.end();
// 			return;
// 		}
// 		response.json(data);
// 	});
// });

// const LOCATION_API = process.env.LOCATION_API;//
// const WEATHER_API = process.env.WEATHER_API;

// It is crucial for these keys to be hidden from the public view
const LOCATION_API = 'pk.960bef9b58caf12f4d456466ec2a42f8';
const WEATHER_API = '0c73b72398c0bfc8c59ca8058faf1eb4';

export { LOCATION_API, WEATHER_API };
