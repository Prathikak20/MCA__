const os = require("os");

console.log("Platform:", os.platform());            // e.g. win32, linux, darwin
console.log("OS Type:", os.type());                 // e.g. Windows_NT, Linux
console.log("OS Release:", os.release());           // e.g. 10.0.19045
console.log("Hostname:", os.hostname());            // Computer name
console.log("Home Directory:", os.homedir());       // User home folder
console.log("Temp Directory:", os.tmpdir());        // Temporary files folder
console.log("CPU Architecture:", os.arch());        // x64, arm, etc
console.log("CPU Info:", os.cpus());                // Array with CPU core details
console.log("Total Memory:", os.totalmem());        // Total system memory in bytes
console.log("Free Memory:", os.freemem());          // Free memory in bytes
console.log("Uptime (seconds):", os.uptime());      // System uptime
console.log("User Info:", os.userInfo());           // Info about current user
console.log("Network Interfaces:", os.networkInterfaces()); // IP addresses