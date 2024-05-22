import http from 'node:http';
import routes from './routes.js';
import { pageFinder } from './module/pageFinder.js';

const app=http.createServer((req,res)=>{
    let page=routes(req.url);

    if(page!==undefined){
    res.statusCode=200;
        res.end(page);
    }else{
        res.statusCode=404;
        page=pageFinder("./view/404.html")
        res.end(page);
    }
});

app.listen(3000,'localhost',()=>{console.log("Servidor Dom Jaca Ligado!")});
