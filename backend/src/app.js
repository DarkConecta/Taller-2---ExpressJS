import express from 'express';
import categoriaRoutes from './routes/categorias.routes.js';
import productosRoutes from './routes/productos.routes.js';
import proveedoresRoutes from './routes/proveedores.routes.js';
import cors from 'cors';
const  app = express();

app.set('port', 5000);

app.use("/api/categorias", categoriaRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/proveedores", proveedoresRoutes);

app.use(cors());
const corsOptions = {
    origin: 'http://127.0.0.1:5500'
};

app.use(cors(corsOptions));


export default app;