import { pool } from '../database'

export const readAllUsers = async(req, res)=>{
    try {
        const response = await pool.query('select * from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const readUser = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from usuario where idusuario = 1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delUser = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idusuario = 1', [id]);
        return res.status(200).json(
            `Usuario ${ id } ha sido eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const updateUser = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ username, password} = req.body;
        await pool.query('update usuario set username = 1, password = 2 where idusuario = 3', [username, password, id]);
        return res.status(200).json(
            `El usuario modificado...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createUser = async(req, res)=>{
    try {
        const{ username, password} = req.body;
        await pool.query('insert into usuario(username, password) values(1, 2)', [username, password]);
        return res.status(200).json(
            `Usuario ${ username } ha sido agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!!!');
    }
}