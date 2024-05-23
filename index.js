import http from 'node:http';
import routes from './routes.js';
import { pageFinder } from './module/pageFinder.js';

const app=http.createServer((req,res)=>{
    
    if(req.url.includes('style.css')){
        const cssSheet=pageFinder('./public/assets/css/style.css');
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(cssSheet.toString());
     }

    //  if(req.url.includes('index.js')){
    //     const jsFile=pageFinder('./public/assets/js/index.js');
    //     // res.writeHead(200,{'Content-Type':'text/javascript'});
    //     res.write(jsFile.toString());
    //  }

    let page=routes(req.url);
    if(page!==undefined){
    res.write(page);
    res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        page=pageFinder("./public/404.html")
        res.end(page);
    }
});

app.listen(3000,'localhost',()=>{console.log("Servidor da Escola Dom Jaca Ligado!")});
