
import { pool } from "../db.js"

export const getProperties = async (req, res) => {

try {
    const [rows] = await pool.query("SELECT * FROM inmueble");
      
      res.render('index',{rows}) 
  } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
  }
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
  
  const nombre = req.params.nombre;
  const descripcion = req.params.descripcion;
  const valor = req.params.valor;
  const habitacion = req.params.habitacion;
  const bano = req.params.bano;
  const area = req.params.area;
  const estado = req.params.estado;
  const barrio = req.params.barrio;
    const rows = await pool.query(
      "INSERT INTO inmueble (nombre, descripcion, valor, habitacion, bano, area, estado, barrio) VALUES (?, ?, ?, ?, ?, ?, ?,?)",
      [nombre, descripcion, valor, habitacion, bano, area, estado, barrio]
    );
    
    res.redirect('/');
  
};

export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre , descripcion, valor, habitacion, bano, area, estado, barrio } = req.body;

    const [result] = await pool.query(
      "UPDATE inmueble SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id = ?",
      [nombre , descripcion, valor, habitacion, bano, area, estado, barrio, id]
    );


    const [rows] = await pool.query("SELECT * FROM inmueble WHERE id = ?", [
      id,
    ]);
    res.render('edit',{rows:rows[0]}) ;
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateCreProperty = (req, res) => {
  const nombre = req.params.nombre;
  const descripcion = req.params.descripcion;
  const valor = req.params.valor;
  const habitacion = req.params.habitacion;
  const bano = req.params.bano;
  const area = req.params.area;
  const estado = req.params.estado;
  const barrio = req.params.barrio;
  const id = req.params.id;

    const result =  pool.query(
      "UPDATE inmueble SET ? WHERE id = ?",
      [{nombre:nombre , descripcion:descripcion, valor:valor, habitacion:habitacion, bano:bano , area:area, estado:estado , barrio:barrio}, id]
    );
    console.log(result)
    res.redirect('/');
 
};