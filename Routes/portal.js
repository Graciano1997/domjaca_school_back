const express=require('express');
const pageFinder = require('../module/pageFinder');
const router=express.Router();
router.use(express.static('public'));

router.get('/',(request,response)=>{
    const page=pageFinder('./view/dashboard/dashboard.html');
     response.status(200).end(page);
  });

router.get('/notas',(request,response)=>{
    const page=pageFinder('./view/dashboard/notas.html');
     response.status(200).end(page);
});
router.get('/aproveitamento',(request,response)=>{
    const page=pageFinder('./view/dashboard/aproveitamento.html');
     response.status(200).end(page);
});

router.get('/perfil',(request,response)=>{
    const page=pageFinder('./view/dashboard/perfil.html');
     response.status(200).end(page);
});

module.exports=router;