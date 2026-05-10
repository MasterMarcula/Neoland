function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("Acceso concedido. ¡Hola " + user + "!");
    } else {
        alert("Acceso denegado. Usuario o contraseña incorrectos");
    }

    // Limpiar los campos y poner el foco en el campo de usuario
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById('username').focus();
}