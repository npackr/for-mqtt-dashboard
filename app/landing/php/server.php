<?php
$hostname = 'localhost';
$username = 'npackrco_mqtt-dashboard';
$password = "o0?,6b/6CJZTM/H'";
$dbname = 'npackrco_qlsach';
$conn = mysqli_connect($hostname, $username, $password, $dbname);

if (!$conn) {
 die('Không thể kết nối: ' . mysqli_error($conn));
 exit();
}
mysqli_set_charset($conn,'UTF8');
