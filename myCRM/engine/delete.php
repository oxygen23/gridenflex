<?php
if(isset($_POST["id"]))
{
    try {
        $conn = new PDO("mysql:host=localhost;dbname=u1761687_default", "u1761687_default", "p7tOvZ8R59U9Lfxr");
        $sql = "DELETE FROM `lead` WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":id", $_POST["id"]);
        $stmt->execute();
        header("Location: ../index.php");
    }
    catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

?>