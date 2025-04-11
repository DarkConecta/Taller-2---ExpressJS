const urlCategorias = "http://localhost:5000/api/categorias";
const urlProductos = "http://localhost:5000/api/productos";
const urlProveedores = "http://localhost:5000/api/proveedores";

export const obtenerCategorias = async () => {
    try {
        const response = await fetch(urlCategorias);
        const categorias = await response.json();
        return categorias;
    } catch (error) {
        console.error("Error 500", error);
        return error.message;
    }
}

export const obtenerProductos = async () => {
    try {
        const response = await fetch(urlProductos);
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error("Error 500", error);
        return error.message;
    }
}

export const obtenerProveedores = async () => {
    try {
        const response = await fetch(urlProveedores);
        const proveedores = await response.json();
        return proveedores;
    } catch (error) {
        console.error("Error 500", error);
        return error.message;
    }
}