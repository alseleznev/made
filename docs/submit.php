<?php
header('Content-type: text/plain; charset=utf-8');

$to = "sales@theymade.com";
$from = "sales@theymade.com";

$name = $_POST['name'];
$brand = $_POST['brand'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$price = $_POST['price'];
$conversion = $_POST['conversion'];

$subject = "New order";
$message = "Name: " . $name . "\r\n" . "Brand: " . $brand . "\r\n" . "Email: " . $email . "\r\n" . "Tel: " . $tel . "\r\n" . "Price: " . $price . "\r\n" . "Conversion: " . $conversion;
$headers = "From:" . $from;

mail($to, $subject, $message, $headers)
?>
