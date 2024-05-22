import http from 'node:http';
import routes from './routes.js';
import { pageFinder } from './module/pageFinder.js';

const app=http.createServer((req,res)=>{
    let page=routes(req.url);

    if(page!==undefined){
    res.writeHead(200,{'Content-Type':'text/html'})
        res.end(page);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        page=pageFinder("./public/404.html")
        res.end(page);
    }
});

app.listen(3000,'localhost',()=>{console.log("Servidor da Escola Dom Jaca Ligado!")});
