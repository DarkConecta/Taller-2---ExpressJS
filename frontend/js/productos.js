import { obtenerProductos, obtenerCategorias, obtenerProveedores } from "../apiConnection/consumeApi.js";

document.addEventListener("DOMContentLoaded", () => {
    loadData();
});

async function loadData() {
    try {
        const [productsObtained, categoriesObtained, providersObtained] = await Promise.all([
            obtenerProductos(),
            obtenerCategorias(),
            obtenerProveedores()
        ]);
        populateTable(productsObtained, categoriesObtained, providersObtained);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

function populateTable(products, categories, providers) {
    const container = document.querySelector("tbody");
    container.innerHTML = ''; 

    const categoryMap = new Map(categories.map(category => [category.CategoriaID, category.CategoriaNombre]));
    const providerMap = new Map(providers.map(provider => [provider.ProveedorID, provider.Compania]));

    products.forEach((product) => {
        const { ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } = product;
        const categoriaNombre = categoryMap.get(CategoriaID) || 'Categoría Desconocida';
        const proveedorNombre = providerMap.get(ProveedorID) || 'Proveedor Desconocido';
        const descontinuadoTexto = Discontinuado === 1 ? 'SI' : 'NO';
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${ProductoID}</td>
            <td>${ProductoNombre}</td>
            <td>${proveedorNombre}</td>
            <td>${categoriaNombre}</td>
            <td>${CantidadPorUnidad}</td>
            <td>${PrecioUnitario}</td>
            <td>${UnidadesStock}</td>
            <td>${UnidadesPedidas}</td>
            <td>${NivelReorden}</td>
            <td>${descontinuadoTexto}</td>
            <button class="btn btn-warning">Detalles</button>
            <button class="btn btn-primary">Editar</button>
            <button class="btn btn-danger">Eliminar</button>
        `;
        container.appendChild(row);
    });
}