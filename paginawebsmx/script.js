

function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const respuesta = document.getElementById("respuesta");

    respuesta.textContent = "¡Gracias, " + nombre + "! Tu mensaje fue recibido correctamente.";
}
