function validarFormulario() {
    // obtengo los valores de los campos del formulario    
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let edad = document.getElementById('edad').value;
        let email = document.getElementById('email').value;
        let contrasenia = document.getElementById('contraseña').value;

        // Expresiones regulares para las validaciones
        const emailFormatRegex = /^[a-zA-Z0-9._%+-]+@(google|outlook|icloud)\.[a-zA-Z]{2,}$/;
        const nombreApellidoRegex = /^[A-Za-z]{1,20}$/;
        const edadRegex = /^\d*$/;
        const contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{9,20}$/;

        // Validar campos
        if (nombre == "" || apellido == "" || !nombreApellidoRegex.test(nombre) || !nombreApellidoRegex.test(apellido)) {
            alert('Nombre y apellido deben contener solo letras y tener menos de 20 caracteres');
            return false;
        }

        if (!edadRegex.test(edad)) {
            alert('Edad debe ser un número válido');
            return false;
        }

        if (email == "" || !emailFormatRegex.test(email)) {
            alert('El formato del email es incorrecto o el dominio no está permitido (Google, Outlook o Icloud)');
            return false;
        }

        if (contrasenia == "" || !contraseñaRegex.test(contrasenia)) {
            alert('Contraseña no válida. Debe contener al menos una letra mayúscula, una letra minúscula, un número y tener entre 9 y 20 caracteres.');
            return false;
        }

        alert('Formulario enviado con éxito');        
        
        return true;
}
