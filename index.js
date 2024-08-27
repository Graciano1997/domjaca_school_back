require("dotenv").config();
const cookieParser = require('cookie-parser');
const express=require("express");
const path=require("path");
const app=express();
const i18n=require("i18n");
const testDBConnection = require("./testDbConnection");
const userNavegatingShow = require("./userNavegating");

i18n.configure({
  locales: ['en', 'pt','fr','es'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'pt',
  cookie: 'lang',
  queryParameter: 'lang',
  autoReload: true, 
  syncFiles: true,
});

app.use(i18n.init); // Initialize the i18n middleware

app.use(cookieParser());

app.use((req, res, next) => {
  const lang = req.cookies.lang || 'pt'; // Default to 'en' if no cookie is set
  i18n.setLocale(req, lang);
  next();
});


app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(request,response)=>{
  userNavegatingShow(request);
  response.redirect('/domjaca');
});

app.get('/set-language/:lang', (req, res) => {
  userNavegatingShow(req);
  const lang = req.params.lang;
  res.cookie('lang', lang, { maxAge: 900000, httpOnly: true });
  res.redirect('/'); // Redirect to home or the page where you want to apply the language
});


app.use('/domjaca',require('./Routes/school'));
app.use('/portal',require('./Routes/portal'));

app.use((req, res, next) => {
  userNavegatingShow(req);
  res.status(404).render('404');
});



app.listen(process.env.PORT,process.env.HOST_IP,()=>{
  console.log("***************************************".bgCyan);
  console.log("*                                     *".bgCyan);
  console.log("* Domjaca School Server is Running    *".bgCyan);
  console.log("*                                     *".bgCyan);
  console.log("***************************************".bgCyan);
});

testDBConnection();
