<?php
$server = "localhost";
$username = "root";
$password = "";
$db = "disertation";
$conn = mysqli_connect($server, $username, $password, $db);
if (!$conn){
    
    die("Connection failed:" .mysqli_connect_error());
    
}
$passcode = $_POST['passcode'];


$sql = "select * from auth";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$pass = $row['passcode'];
$id = $row['id'];

if($passcode == $pass && $id ==1){
   header("location: user.html");  
    
}

else{
    
    header ("location: index.html");
     
}

?>
