const db = require("./models");

const testDBConnection= async()=>{
    try {
        await db.sequelize.authenticate();
        console.log("Authenticated SuccessFully!");
    } catch (error) {
        console.error("Could not Authenticate....");
    }
}

testDBConnection();