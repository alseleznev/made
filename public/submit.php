<?php
if (isset($_POST['submit'])) {
    $to = "sales@theymade.com";
    $from = "sales@theymade.com";

    $name = $_POST['name'];
    $brand = $_POST['brand'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $type = $_POST['type'];

    $subject = "New order";
    $message = $name . "\n\n" . $brand . "\n\n" . $email . "\n\n" . $phone . "\n\n" . $type;
    $headers = "From:" . $from;

    mail($to, $subject, $message, $headers);
}
?>
