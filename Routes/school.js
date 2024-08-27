const express=require('express');
const router=express.Router();
router.use(express.static('public'));

router.get('/',(request,response)=>{
    response.render('./school/index').response.status(200);
 });

router.get('/acerca',(request,response)=>{
    response.render('./school/acerca').response.status(200);
  });
  
  router.get('/anuncios',(request,response)=>{
    response.render('./school/anuncio').response.status(200);
  });
  
  router.get('/estudantes_honra',(request,response)=>{
     response.render('./school/estudanteHonra').response.status(200);
  });
  
  router.get('/novas_matriculas_confirmacoes',(request,response)=>{
     response.render('./school/matricula').response.status(200);
  });
  
  router.get('/portal_estudante',(request,response)=>{
     response.render('./school/portal').response.status(200);
  });
  
  router.get('/alums',(request,response)=>{
     response.render('./school/alums').response.status(200);
  });

  router.get('/login',(request,response)=>{
    response.render('./school/login').response.status(200);
  });

  module.exports=router;