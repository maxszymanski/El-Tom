<?php

$firstName = $_POST["contact-first-name"];
$lastName = $_POST["contact-last-name"];
$phone = $_POST["contact-tel"];
$from = $_POST["contact-email"];
$subject = "Widomosc z formularza Eltom.online";
$to = "kontakt@eltom.online";
$message = $_POST["contact-msg"];

$txt = "imie: " . $firstName . " " . $lastName . "\r\n" . "Nr. tel: " . $phone . "\r\n" . "E-mail: " . $from . "\r\n" . "\r\n" . "tresc: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Replay-to: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
    header("location: /index.html?mail_status=sent");
} else {
    header("location: /index.html?mail_status=error");
}