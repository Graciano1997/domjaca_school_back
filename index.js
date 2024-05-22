import http from 'node:http';
import routes from './routes.js';

const app=http.createServer((req,res)=>{
    const page=routes(req.url);
    if(page!==undefined){
        res.end(page);
    }else{
        res.end("<h1>Not Founded</h1>");
    }
});

app.listen(3000,'localhost',()=>{console.log("Servidor Dom Jaca Ligado!")});
