// api/contact.php
<?php
include 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$sql = "INSERT INTO contacts (user_id, sender_name, sender_email, message, date_sent) VALUES (1, '$name', '$email', '$message', NOW())"; // Adjust user_id as needed

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => $conn->error]);
}

$conn->close();
?>
