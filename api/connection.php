<?php

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "alnoor_inventory";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("ERROR: Unable to connect: " . $conn->connect_error);
}




























?>