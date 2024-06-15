const express=require("express");
const pageFinder=require("./module/pageFinder");
const app=express();

app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/acerca',(request,response)=>{
  // const page=pageFinder('./view/acerca.html');
  response.render('acerca');
  // response.status(200).end(page);
});

app.get('/anuncios',(request,response)=>{
  response.render('anuncio');
});

app.get('/estudantes_honra',(request,response)=>{
  // const page=pageFinder('./view/estudanteHonra.html');
  //  response.status(200).end(page);
   response.render('estudanteHonra');
});

app.get('/novas_matriculas_confirmacoes',(request,response)=>{
  // const page=pageFinder('./view/matricula.html');
  //  response.status(200).end(page);
   response.render('matricula');
});

app.get('/portal_estudante',(request,response)=>{
  // const page=pageFinder('./view/portal.html');
   response.render('portal');
});

app.get('/alums',(request,response)=>{
  // const page=pageFinder('./view/alums.html');
   response.render('alums');
});

app.get('/',(request,response)=>{
  // const page=pageFinder('./view/index.html');
    // response.status(200).end(page);
   response.render('index');
});

app.get('/login',(request,response)=>{
  response.render('login');
});

app.use('/portal',require('./Routes/portal'));

app.use((request,response,next)=>{
  // const page=pageFinder('./view/404.html');
   response.status(404);
   response.render('404')
})

app.listen(3000,"0.0.0.0",()=>{
  console.log("***************************************");
  console.log("*                                     *");
  console.log("* Servidor da Escola Dom Jaca Ligado! *");
  console.log("*                                     *");
  console.log("***************************************");
});

