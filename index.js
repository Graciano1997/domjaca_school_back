import express from "express";
// import path, { dirname } from "path";
import pageFinder from "./module/pageFinder.js";

const app=express();

app.use(express.static('public'));

app.use('portal/',require('./Routes/portal'));

app.get('/acerca',(request,response)=>{
  const page=pageFinder('./view/acerca.html');
  response.status(200).end(page);
});

app.get('/anuncios',(request,response)=>{
  const page=pageFinder('./view/anuncio.html');
   response.status(200).end(page);
});

app.get('/estudantes_honra',(request,response)=>{
  const page=pageFinder('./view/estudanteHonra.html');
   response.status(200).end(page);
});

app.get('/novas_matriculas_confirmacoes',(request,response)=>{
  const page=pageFinder('./view/matricula.html');
   response.status(200).end(page);
});

app.get('/portal_estudante',(request,response)=>{
  const page=pageFinder('./view/portal.html');
   response.status(200).end(page);
});

app.get('/alums',(request,response)=>{
  const page=pageFinder('./view/alums.html');
   response.status(200).end(page);
});

app.get('/',(request,response)=>{
  const page=pageFinder('./view/index.html');
   response.status(200).end(page);
});

app.get('/login',(request,response)=>{
  const page=pageFinder('./view/dashboard/login.html');
   response.status(200).end(page);
});

app.get('/dashboard',(request,response)=>{
  const page=pageFinder('./view/dashboard/dashboard.html');
   response.status(200).end(page);
});


app.use((request,response,next)=>{
  const page=pageFinder('./view/404.html');
   response.status(404).end(page);
})

app.listen(3000,"0.0.0.0",()=>{
  console.log("***************************************");
  console.log("*                                     *");
  console.log("* Servidor da Escola Dom Jaca Ligado! *");
  console.log("*                                     *");
  console.log("***************************************");
});

