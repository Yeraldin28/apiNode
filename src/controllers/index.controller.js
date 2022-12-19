import { pool } from '../db.js';
export const index = (req, res)=> res.json({message:"Welcome a la API"})

export const ping = async (req, res)=> {
    const [result]= await pool.query('SELECT * FROM `inmueble` WHERE 1;');
    res.json(result[0]);
    }