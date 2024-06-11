import express from "express";

export const router =express.Router();

router.get('/notas',(request,response)=>{
    response.write("<h1>Consulta de Notas </h1>");
    response.end();
})