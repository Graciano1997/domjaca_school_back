const db = require("./models");
const colors = require('colors');

const testDBConnection= async()=>{
    console.log("Testing the Connection:::".orange);
    try {
        await db.sequelize.authenticate();
        console.log("\n");
        console.log("**************************DomJaca_DB SuccessFully initialized!***********************".bgGreen.bold);
    } catch (error) {
        console.log("\n");
        console.error("***********************UPSSS! Could not Initialize DomJaca_DB Please check it***********".bgRed.bold);
    }
}

module.exports=testDBConnection;