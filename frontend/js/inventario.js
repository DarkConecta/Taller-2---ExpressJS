import { obtenerCategorias } from "../apiConnection/consumeApi.js";

document.addEventListener("DOMContentLoaded", () => {
    getCategories();
});
async function getCategories() {
    const categoriesObtained = await obtenerCategorias();
    const container = document.querySelector("tbody");
    categoriesObtained.forEach((category) => {
        const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = category;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${CategoriaID}</td>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td><img src="${Imagen}" width="100px" height="100px"></td>
        <button class="btn btn-warning">Detalles</button>
        <button class="btn btn-primary">Editar</button>
        <button class="btn btn-danger">Eliminar</button>
        `;
        container.appendChild(row);
        });
    };
