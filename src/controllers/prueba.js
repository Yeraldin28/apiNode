import { pool } from "../db.js"

export const getProperties = async (req, res) => {
  

      const rows = await pool.query("SELECT * FROM inmueble");
        
        res.render('index',{rows:rows}) 

    };

export const getProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM `inmueble` WHERE id = ?", [
        id,
        ]);

        if (rows.length <= 0) {
        return res.status(404).json({ message: "Inmueble not found" });
        }

        res.json(rows[0]);
        } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM inmueble WHERE id = ?", [id]);

        if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Inmueble not found" });
        }
        
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
    };

export const createProperty = async (req, res) => {
  try {
  const user= req.body.nombre;
        console.log(user)  

    const nombre= req.body.nombre;
    const descripcion= req.body.descripcion;
    const valor= req.body.valor;
    const habitacion= req.body.habitacion;
    const bano= req.body.bano;
    const area= req.body.area;
    const barrio= req.body.barrio;
    const estado= req.body.estado;
    console.log(nombre , descripcion, valor, habitacion, bano, area,  barrio);
        
      const rows =  pool.query(
        "INSERT INTO inmueble (nombre , descripcion, valor, habitacion, bano, area, estado, barrio) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        (nombre , descripcion, valor, habitacion, bano, area, estado, barrio)
      );
      res.status(201).json({ id: rows.insertId, nombre , descripcion, valor, habitacion, bano, area, estado, barrio });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
  }
  };
  
  export const updateProperty = async (req, res) => {
    const id = req.params.id;
    try {
      const nombre= req.body.nombre;
    const descripcion= req.body.descripcion;
    const valor= req.body.valor;
    const habitacion= req.body.habitacion;
    const bano= req.body.bano;
    const area= req.body.area;
    const barrio= req.body.barrio;
    const estado= req.body.estado;
  
      const result = await pool.query(
        "UPDATE inmueble SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id = ?",
      (nombre , descripcion, valor, habitacion, bano, area, estado, barrio, id)
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Inmuebles not found" });
  
      const [rows] = await pool.query("SELECT * FROM inmueble WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };