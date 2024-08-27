const mysql=require('mysql');
const { dbConfiguration } = require('../setup/db');

class DAO{
    con=mysql.createConnection(dbConfiguration);

    insert(table,object){
        let fieldsName='';
        let fieldsValue='';

        for(let key in object){
            fieldsName+=key+',';
            fieldsValue+=`'${object[key]}',`;
        }

        fieldsName=fieldsName.slice(0,fieldsName.length-1);
        fieldsValue=fieldsValue.slice(0,fieldsValue.length-1);

        this.con.connect((err)=>{
            if(err){return err;}
        this.con.query(`insert into ${table} (${fieldsName}) VALUES (${fieldsValue})`,(err,result)=>{
            if(err) throw err;
            return result;
        });
        return true;
    });
        console.log('Inserted Sucessfully!');
        return true;
    }
    
    delete(table,object){
        let fieldsName='';
        let fieldsValue='';

        for(let key in object){
            fieldsName+=key+',';
            fieldsValue+=`'${object[key]}',`;
        }

        fieldsName=fieldsName.slice(0,fieldsName.length-1);
        fieldsValue=fieldsValue.slice(0,fieldsValue.length-1);

        this.con.connect((err)=>{
            if(err){return err;}
            const result=this.con.query(`SELECT * FROM   ${table} WHERE ${fieldsName} = ${fieldsValue}`,(err,result)=>{
                if(err) throw err;
                return result.length;
            });
            console.log(result);

        this.con.query(`delete from ${table} WHERE ${fieldsName} = ${fieldsValue}`,(err,result)=>{
            if(err) throw err;
            return result;
        });
        return true;
    });
        console.log('deleted successfully!');
        return true;
    }
}

 const crud= new DAO();
 const estudanteObject={nome:'Graciano Henrique',
     documento:'005717487MO090',
     morada:'Luanda',
     telefone:'935636086'
 };
//  crud.insert("estudante",estudanteObject);
crud.delete("estudante",{morada:'Luanda'});
