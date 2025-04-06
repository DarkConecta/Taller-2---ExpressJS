import getConnection from "../db/database.js";

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        res.json(result);
    } catch (error) {
        console.error("Error 500", error);
        res.status(500);
        res.send(error.message);
    }
}

export const methodHTTP = {
    getCategorias
}