const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('productos.js', 'utf8');
const context = {
  console,
  window: {}
};

vm.createContext(context);
vm.runInContext(code, context, { filename: 'productos.js' });

const productos = context.window.PRODUCTOS || context.PRODUCTOS;
if (!Array.isArray(productos)) {
  console.error('No se pudo cargar PRODUCTOS desde productos.js');
  process.exit(1);
}

const TITULO_MAX = 121;
const errores = [];
const ids = new Set();

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i] || {};
  const ref = producto.id || `fila ${i + 1}`;

  if (!producto.id) errores.push(`Producto sin id en ${ref}`);
  else if (ids.has(producto.id)) errores.push(`Id duplicado: ${producto.id}`);
  else ids.add(producto.id);

  const nombre = String(producto.nombre || '').replace(/\s+/g, ' ').trim();
  if (!nombre) errores.push(`Producto sin nombre en ${ref}`);
  else if (nombre.length > TITULO_MAX) errores.push(`Titulo mayor a ${TITULO_MAX} caracteres en ${ref}: ${nombre.length}`);
  if (!producto.sector) errores.push(`Producto sin sector en ${ref}`);
  if (typeof producto.precio !== 'number' || !Number.isFinite(producto.precio) || producto.precio < 0) {
    errores.push(`Precio invalido en ${ref}`);
  }
}

if (errores.length) {
  console.error(`Catalogo invalido: ${errores.length} problema(s)`);
  for (const error of errores.slice(0, 25)) console.error(`- ${error}`);
  if (errores.length > 25) console.error(`- ... y ${errores.length - 25} mas`);
  process.exit(1);
}

console.log(`Catalogo valido: ${productos.length} productos, ${ids.size} ids unicos.`);
