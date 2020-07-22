const fs = require('fs')
const coolImages = require("cool-images");
const moment = require('moment');

let arrayUrlImagenes = coolImages.many();
let fechaActual = moment().format("YYYY/MM/DD HH:mm:ss")

fs.appendFile("log.txt", fechaActual + "\n" + arrayUrlImagenes + "\n\n",  (error) => {
    if (error) throw Error;
console.log("exito")
});

fs.readFile('log.txt',"utf-8", (err, data) => {
    console.log(data); 
});