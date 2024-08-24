require("dotenv").config();
const express=require("express");
const app=express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(request,response)=>{
  response.redirect('/domjaca');
});

app.use('/domjaca',require('./Routes/school'));
app.use('/portal',require('./Routes/portal'));

app.use((request,response,next)=>{response.render('404').response.status(404);});

app.listen(process.env.PORT,process.env.HOST_IP,()=>{
  console.log("***************************************");
  console.log("*                                     *");
  console.log("* Servidor da Escola Dom Jaca Ligado! *");
  console.log("*                                     *");
  console.log("***************************************");
});

