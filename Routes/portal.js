const express=require('express');
const router=express.Router();
router.use(express.static('public'));

router.get('/',(request,response)=>{
    response.render('./dashboard/dashboard');
    
  });

router.get('/notas',(request,response)=>{
     response.render('./dashboard/notas');
});
router.get('/aproveitamento',(request,response)=>{
     response.render('./dashboard/aproveitamento');
});

router.get('/perfil',(request,response)=>{
     response.render('./dashboard/perfil');
});

module.exports=router;