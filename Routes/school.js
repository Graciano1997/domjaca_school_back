const express=require('express');
const userNavegatingShow = require('../userNavegating');
const router=express.Router();
router.use(express.static('public'));

router.get('/',(request,response)=>{
   userNavegatingShow(request);
   response.render('./school/index');
 });

router.get('/acerca',(request,response)=>{
   userNavegatingShow(request);
    response.render('./school/acerca');
  });
  
  router.get('/anuncios',(request,response)=>{
   userNavegatingShow(request);
    response.render('./school/anuncio');
  });
  
  router.get('/estudantes_honra',(request,response)=>{
   userNavegatingShow(request);
     response.render('./school/estudanteHonra');
  });
  
  router.get('/novas_matriculas_confirmacoes',(request,response)=>{
   userNavegatingShow(request);
     response.render('./school/matricula');
  });
  
  router.get('/portal_estudante',(request,response)=>{
   userNavegatingShow(request);
     response.render('./school/portal');
  });
  
  router.get('/alums',(request,response)=>{
   userNavegatingShow(request);
     response.render('./school/alums');
  });

  router.get('/login',(request,response)=>{
   userNavegatingShow(request);
    response.render('./school/login');
  });

  module.exports=router;