<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recibimos los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono'] ?? '');
    $email = htmlspecialchars($_POST['email']);
    $empresa = htmlspecialchars($_POST['empresa'] ?? '');
    $ciudad = htmlspecialchars($_POST['ciudad'] ?? '');
    $asunto = htmlspecialchars($_POST['asunto'] ?? 'Nuevo contacto desde Intersteel Web');
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Aquí podrías hacer validaciones si quieres
    // Por ahora, solo simulamos el envío y redirigimos a gracias.html
    header("Location: gracias.html");
    exit();

} else {
    echo "Método no permitido.";
}
?>
