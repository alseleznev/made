<?php
header('Content-type: text/plain; charset=utf-8');

$to = "sales@theymade.com";
$from = "sales@theymade.com";

$name = $_POST['name'] ?: 'Vladimir';
$brand = $_POST['brand'] ?: 'New brand name';
$email = $_POST['email'] ?: 'mail@ixax.me';
$tel = $_POST['tel'] ?: '+7 (965) 308-58-94';
$price = $_POST['price'] ?: '999';
$target = $_POST['target'] ?: 'gall';

$subject = "New order";
$message = "Name: " . $name . "\r\n" . "Brand: " . $brand . "\r\n" . "Email: " . $email . "\r\n" . "Tel: " . $tel . "\r\n" . "Price: " . $price . "\r\n" . "Target: " . $target;
$headers = "From:" . $from;

mail($to, $subject, $message, $headers)
?>
