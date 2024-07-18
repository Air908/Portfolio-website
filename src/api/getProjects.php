// api/getProjects.php
<?php
include 'config.php';

$sql = "SELECT * FROM projects WHERE user_id = 1"; // Adjust user_id as needed
$result = $conn->query($sql);

$projects = array();
while($row = $result->fetch_assoc()) {
    $projects[] = $row;
}

echo json_encode($projects);

$conn->close();
?>
