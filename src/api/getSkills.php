<?php
include 'config.php';

$sql = "SELECT * FROM skills WHERE user_id = 1"; // Adjust user_id as needed
$result = $conn->query($sql);

$skills = array();
while($row = $result->fetch_assoc()) {
    $skills[] = $row;
}

echo json_encode($skills);
?>
