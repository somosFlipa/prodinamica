<?php
$nombre = $_POST["name"];
$mail = $_POST["email"];
$contenido = $_POST["textarea"];
$servicio = $_POST["empresa"];
$telefono = $_POST["phone"];
$archivo = $_FILES["archivosubido"];

$mensaje = "Este mensaje fue enviado por " . $nombre . "\r\n";
$mensaje .= "Su email es: " . $mail . "\r\n";
$mensaje .= "Servicio requerido: " . $servicio . "\r\n";
$mensaje .= "Mensaje: " . $contenido . "\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());
// Mostrar errores PHP (Desactivar en producción)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Incluir la libreria PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Inicio
$mail = new PHPMailer(true);

try {
  

    // Configuracion SMTP
    $mail->SMTPDebug = 0;                         // Mostrar salida (Desactivar en producción)
    $mail->isSMTP();                                               // Activar envio SMTP
    $mail->Host  = 'mail.prodinamica.com.ar';                     // Servidor SMTP
    $mail->SMTPAuth  = true;                                       // Identificacion SMTP
    $mail->Username  = 'hola@prodinamica.com.ar';                  // Usuario SMTP
    $mail->Password  = 'prodinamica2022';	          // Contraseña SMTP
    $mail->SMTPSecure = "ssl";
    $mail->Port  = 465;
    $mail->setFrom('hola@prodinamica.com.ar', 'Prodinamica');                // Remitente del correo

    // Destinatarios
    $mail->addAddress('luna@flipa.ar', 'Nuevo interesado');  // Email y nombre del destinatario




    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo posible cliente';
    $mail->Body  = "$mensaje";
    $mail->addAttachment($archivo["tmp_name"], $archivo["name"] );
    
    
    $mail->AltBody = 'Contenido del correo en texto plano para los clientes de correo que no soporten HTML';
    $mail->send();




    echo 'El mensaje se ha enviado';
} catch (Exception $e) {
    echo "El mensaje no se ha enviado. Mailer Error: {$mail->ErrorInfo}";
}