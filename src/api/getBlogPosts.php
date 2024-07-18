// api/getBlogPosts.php
<?php
include 'config.php';

$sql = "SELECT * FROM blog_posts WHERE user_id = 1"; // Adjust user_id as needed
$result = $conn->query($sql);

$blog_posts = array();
while($row = $result->fetch_assoc()) {
    $blog_posts[] = $row;
}

echo json_encode($blog_posts);

$conn->close();
?>
