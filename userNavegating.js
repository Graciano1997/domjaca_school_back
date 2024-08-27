const userNavegatingShow=(request)=>{
    switch (request.method) {
        case 'GET':
            method="GETTING";
            break;
            case 'POST':
            method="POSTING";
            break;
            case 'PUT':
            method="PUTTING";
            break;
            default:
            break;
            }
                console.log(`User is ${method}  url ${request.url}`.bgMagenta);
}

module.exports=userNavegatingShow;