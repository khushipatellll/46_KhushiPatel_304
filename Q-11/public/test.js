const { humanizeTimeDiff } = require('./index');

const now = new Date();
const past = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000); 
const future = new Date(now.getTime() + 3 * 60 * 60 * 1000);    

console.log(humanizeTimeDiff(past));     
console.log(humanizeTimeDiff(future));  
