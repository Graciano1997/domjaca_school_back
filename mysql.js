const mysql=require('mysql');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"site_de_marcacao_de_consulta"
});

const Query=()=>{
    return con.connect((err)=>{
        const sql="SELECT * FROM paciente";
        if(err) throw err;
         con.query(sql,(err,result)=>{
             if(err) throw err;
             result.filter((result)=>result.sexo==='Masculino').map((result)=>{ console.log({...result},",");});
         })
     });
    
} 

Query();