import getConnection from "../db/database.js";

const getProveedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT ProveedorID, Compania, Contacto, Titulo, Direccion, Ciudad, CodigoPostal, Pais, Telefono FROM proveedores");
        res.json(result);
    } catch (error) {
        console.error("Error 500", error);
        res.status(500);
        res.send(error.message);
    }
}

export const methodHTTP = {
    getProveedores
}