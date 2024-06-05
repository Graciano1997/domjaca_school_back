import express from "express";

const app=express();

app.use(express.static('public'));
app.use(express.static('view'));

app.get('/acerca',(request,response)=>{
  response.status(200).sendFile("/404.html");
});

app.get('/',(request,response)=>{
   response.status(200).sendFile("/index.html");
});

app.listen(3000,"0.0.0.0",()=>{
  console.log("**************************************");
  console.log("*                                    *");
  console.log("* Servidor da Escola Dom Jaca Ligado!*");
  console.log("*                                    *");
  console.log("**************************************");
});


// app.get('/',(request,response)=>{
//   return response.status(200).sendFile("/index.html");
// });
// app.get('/',(request,response)=>{
//   return response.status(200).sendFile("/index.html");
// });
// app.get('/',(request,response)=>{
//   return response.status(200).sendFile("/index.html");
// });
// app.get('/',(request,response)=>{
//   return response.status(200).sendFile("/index.html");
// });
// app.get('/',(request,response)=>{
//   return response.status(200).sendFile("/index.html");
// });


// case '/':
//   case '/home':
//       page = pageFinder("./view/index.html");
//       break;
//   case '/about':
//   case '/acerca':
//       page = pageFinder("./view/acerca.html");
//       break;
//   case '/news':
//   case '/anuncios':
//       page = pageFinder("./view/anuncio.html");
//       break;
//   case '/estudantes_honra':
//       page = pageFinder("./view/estudanteHonra.html");
//       break;
//   case '/novas_matriculas_confirmacoes':
//       page = pageFinder("./view/matricula.html");
//       break;
//   case '/portal_estudante':
//   case '/student_gate':
//       page = pageFinder("./view/portal.html");
//       break;
//   case '/alums':
//       page = pageFinder("./view/alums.html");
//       break;
//   case '/login':
//       page = pageFinder("./view/dashboard/login.html");
//       break;
//   case '/dashboard':
//       page = pageFinder("./view/dashboard/dashboard.html");
//       break;
//   case '/dashboard/perfil':
//       page = pageFinder("./view/dashboard/perfil.html");
//       break;
//   case '/dashboard/aproveitamento':
//       page = pageFinder("./view/dashboard/aproveitamento.html");
//       break;
//   case '/dashboard/notas':
//       page = pageFinder("./view/dashboard/notas.html");
//       break;


// import http from 'node:http';

// const app = http.createServer((req, res) => {
//   if (req.url.indexOf('.css') != -1) {
//     const cssSheet = pageFinder('./public/assets/style.css');
//     res.writeHead(200, { 'Content-Type': 'text/css' });
//     res.write(cssSheet.toString());
//   }

//   if (req.url.indexOf('.js') != -1) {
//     const jsPage = pageFinder('./public/assets/index.js');
//     res.writeHead(200, { 'Content-Type': 'text/javascript' });
//     res.write(jsPage.toString());
//   }

//     let page = routes(req.url);
//     if ((page !== undefined) && (page !== '')) {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(page);
//       res.end();
//     }

//     if(page===undefined){
//       page = pageFinder("./view/404.html");
//       res.statusCode=404;
//       res.statusMessage="The Page Was not found!";
//       res.write(page);
//       res.end();
//     }

//     if(page===''){
//       res.end();
//     }
// });

// app.listen(3000, 'localhost', () => {console.log("Servidor da Escola Dom Jaca Ligado!");});
