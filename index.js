import http from 'node:http';
import routes from './routes.js';
import pageFinder from './module/pageFinder.js';

const app = http.createServer((req, res) => {
  if (req.url.indexOf('.css') != -1) {
    const cssSheet = pageFinder('./public/assets/style.css');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(cssSheet.toString());
  }

  if (req.url.indexOf('.js') != -1) {
    const jsPage = pageFinder('./public/assets/index.js');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(jsPage.toString());
  }

    let page = routes(req.url);
    if ((page !== undefined) && (page !== '')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(page);
      res.end();
    }

    if(page===undefined){
      page = pageFinder("./view/404.html");
      res.statusCode=404;
      res.statusMessage="The Page Was not found!";
      res.write(page);
      res.end();
    }

    if(page===''){
      res.end();
    }
});

app.listen(3000, 'localhost', () => {console.log("Servidor da Escola Dom Jaca Ligado!");});
