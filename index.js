const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const dotenv = require('dotenv');
dotenv.config();

const apiURL = process.env.URL;
const socketURL = process.env.URL_SOCKET;
const secretToken = process.env.TOKEN;

const api = OpenAPI({ apiURL, socketURL, secretToken });

//TODO: Here we will write our bot

function main() {}
main();