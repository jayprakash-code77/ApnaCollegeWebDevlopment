// IMPORTANT >>> this file "index.js" is the entry point for "require" in the "ExportsInDirectory" directory.

const lotus = require("./lotus");
const rose = require("./rose");
const tulsi = require("./tulsi");

let info = [lotus,rose,tulsi];
module.exports = info;
