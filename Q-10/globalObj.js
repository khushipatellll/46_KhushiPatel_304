console.log("Current File Path: ",__filename);
console.log("Current Directory path: ",__dirname);

console.log("Node.js Version: ",process.version);
console.log("Platform: ",process.platform);

console.log("Home Directory: ",process.env.HOME || process.env.USERPROFILE);

global.myGlobalVar = "This is a global variable";

function printGlobalVar() {
    console.log("Accessing Global Variable: ",global.myGlobalVar);
}

printGlobalVar();

setTimeout(() => {
   console.log("This message is shown after 2 seconds delay using setTimeOut."); 
}, 2000);

console.log("Logging from the global console object.");

console.log("Exiting program in 3 seconds...");
setTimeout(() => {
  console.log("Exiting now.");
  process.exit(0);
}, 3000);