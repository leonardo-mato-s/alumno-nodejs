import { pool } from '../database'

export const readAllProds = async(req, res)=>{
    try {
        const response = await pool.query('select * from alumno');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}
export const readProd = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from alumno where idalumno = 1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delProd = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from alumno where idalumno = 1', [id]);
        return res.status(200).json(
            `Alumno ${ id } ha sido eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const updateProd = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ nomprod, precio, stock} = req.body;
        await pool.query('update alumno set nomalum = 1, codigo = 201910181, carrera = sistemas where idalumno = 4', [nomalum, codigo, carrera, id]);
        return res.status(200).json(
            `Alumno modificado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createProd = async(req, res)=>{
    try {
        const{ nomalum, codigo, carrera} = req.body;
        await pool.query('insert into alumno(nomalum, codigo, carrera) values(1, 201910181, sistemas)', [nomalum, codigo, carrera]);
        return res.status(200).json(
            `El alumno ${ nomalum } ha sido agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

