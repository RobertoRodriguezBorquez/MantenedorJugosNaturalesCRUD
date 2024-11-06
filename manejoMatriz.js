var matriz = [];

function mostrarMensaje(mensaje) {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = mensaje;
}

function mostrarProducto() {
    var largo = matriz.length;
    var mensaje = "<h3>Lista de Productos:</h3><ul>";
    for (var x = 0; x < largo; x++) {
        mensaje += `<li><strong>Nombre:</strong> ${matriz[x][0]}, 
                        <strong>Categoría:</strong> ${matriz[x][1]}, 
                        <strong>Precio:</strong> ${matriz[x][2]} CLP, 
                        <strong>Código:</strong> ${matriz[x][3]}, 
                        <strong>Descripción:</strong> ${matriz[x][4]}, 
                        <strong>Stock:</strong> ${matriz[x][5]}</li>`;
    }
    mensaje += "</ul>";
    mostrarMensaje(mensaje);
}

function insertarProducto() {
    var nombre = document.getElementById("nombre").value;
    var categoria = document.getElementById("categoria").value;
    var precio = document.getElementById("precio").value;
    var codigo = document.getElementById("codigo").value;
    var descripcion = document.getElementById("descripcion").value;
    var stock = document.getElementById("stock").value;

    matriz.push([nombre, categoria, precio, codigo, descripcion, stock]);
    mostrarMensaje("Producto insertado con éxito.");
    document.miform.reset();
}

function actualizarProducto() {
    var codigo = document.getElementById("codigo").value;
    var actualizado = false;
    for (var i = 0; i < matriz.length; i++) {
        if (matriz[i][3] === codigo) {
            matriz[i] = [
                document.getElementById("nombre").value,
                document.getElementById("categoria").value,
                document.getElementById("precio").value,
                codigo,
                document.getElementById("descripcion").value,
                document.getElementById("stock").value
            ];
            actualizado = true;
            mostrarMensaje("Datos actualizados correctamente.");
            break;
        }
    }
    if (!actualizado) mostrarMensaje("Producto no encontrado.");
    document.miform.reset();
}

function eliminarProducto() {
    var codigo = document.getElementById("codigo").value;
    var eliminado = false;
    for (var i = 0; i < matriz.length; i++) {
        if (matriz[i][3] === codigo) {
            matriz.splice(i, 1);
            eliminado = true;
            mostrarMensaje("Producto eliminado con éxito.");
            break;
        }
    }
    if (!eliminado) mostrarMensaje("Producto no encontrado.");
    document.miform.reset();
}
