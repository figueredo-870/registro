function validarFormulario() {
    // Obtener los valores de los campos del formulario
    let userNombre = document.getElementById("userNombre").value;
    let userApellido = document.getElementById("userApellido").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword1 = document.getElementById("userPassword1").value;
    let userPassword2 = document.getElementById("userPassword2").value;
    let userTerminos = document.getElementById("userTerminos").checked;

    // Restaurar el color original de los campos
    cambiarColorElemento('#userNombre', '');
    cambiarColorElemento('#userApellido', '');
    cambiarColorElemento('#userEmail', '');
    cambiarColorElemento('#userPassword1', '');
    cambiarColorElemento('#userPassword2', '');
    cambiarColorElemento('#botonTerminos', '');

    // Realizar las validaciones
    if (
        userNombre.trim() === "" ||
        userApellido.trim() === "" ||
        userEmail.trim() === "" ||
        userPassword1.trim() === "" ||
        userPassword2.trim() === ""
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ningún campo puede estar vacío',
        });

        // Cambiar el color de los campos en rojo
        if (userNombre.trim() === "") {
            cambiarColorElemento('#userNombre', 'red');
        }
        if (userApellido.trim() === "") {
            cambiarColorElemento('#userApellido', 'red');
        }
        if (userEmail.trim() === "") {
            cambiarColorElemento('#userEmail', 'red');
        }
        if (userPassword1.trim() === "") {
            cambiarColorElemento('#userPassword1', 'red');
        }
        if (userPassword2.trim() === "") {
            cambiarColorElemento('#userPassword2', 'red');
        }

        // Cambiar el color del botón que abre el modal
        cambiarColorElemento('#botonTerminos', 'red');

        // Agregar un signo de exclamación al lado del botón del modal
        document.getElementById("modalTerminos").querySelector(".btn-primary").innerHTML += "!";

        return false;
    }

    if (!validarEmail(userEmail)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Email debe tener un formato válido',
        });

        // Resaltar el campo de Email en rojo
        cambiarColorElemento('#userEmail', 'red');

        return false;
    }

    if (userPassword1.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener al menos 6 caracteres',
        });

        // Resaltar el campo de Contraseña en rojo
        cambiarColorElemento('#userPassword1', 'red');

        return false;
    }

    if (userPassword1 !== userPassword2) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden',
        });

        // Resaltar los campos de Contraseña en rojo
        cambiarColorElemento('#userPassword1', 'red');
        cambiarColorElemento('#userPassword2', 'red');

        return false;
    }

    if (!userTerminos) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes aceptar los términos y condiciones del servicio',
        });

        // Cambiar el color del botón que abre el modal
        cambiarColorElemento('#botonTerminos', 'red');

        // Agregar un signo de exclamación al lado del botón del modal
        document.getElementById("modalTerminos").querySelector(".btn-primary").innerHTML += "!";

        return false;
    }

    // Limpiar los campos del formulario
    limpiarCampos();

    // Si todas las validaciones pasan, se envía el formulario
    Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: '¡Tu registro ha sido exitoso!',
    });

    console.log("enviado!");
    return true;
}

function validarEmail(email) {
    // Expresión regular para validar el formato del email
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function cambiarColorElemento(selector, color) {
    // Obtén el elemento por su selector
    var elemento = document.querySelector(selector);

    // Verifica si el elemento existe (para evitar errores si algo falla)
    if (elemento) {
        // Cambia el color del borde del elemento
        elemento.style.borderColor = color;
    }
}

function limpiarCampos() {
    // Limpiar los valores de los campos del formulario
    document.getElementById("userNombre").value = "";
    document.getElementById("userApellido").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword1").value = "";
    document.getElementById("userPassword2").value = "";
    document.getElementById("userTerminos").checked = false;

    // Restaurar el color original del botón que abre el modal
    cambiarColorElemento('#botonTerminos', ''); // Restaura el color original
}

// Añadir eventos de entrada a los campos de texto y a la casilla de verificación
document.getElementById("userNombre").addEventListener("input", function () {
    cambiarColorElemento('#userNombre', '');
});

document.getElementById("userApellido").addEventListener("input", function () {
    cambiarColorElemento('#userApellido', '');
});

document.getElementById("userEmail").addEventListener("input", function () {
    cambiarColorElemento('#userEmail', '');
});

document.getElementById("userPassword1").addEventListener("input", function () {
    cambiarColorElemento('#userPassword1', '');
});

document.getElementById("userPassword2").addEventListener("input", function () {
    cambiarColorElemento('#userPassword2', '');
});

document.getElementById("userTerminos").addEventListener("change", function () {
    cambiarColorElemento('#botonTerminos', '');
});