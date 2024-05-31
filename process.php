<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['myTextField'])) {
        $textFieldValue = $_POST['myTextField'];
        
        // Hier kun je doen wat je wilt met de tekstveldwaarde.
        // Voor nu gaan we het gewoon teruggeven als reactie.
        
        echo " " . htmlspecialchars($textFieldValue);
    } else {
        echo "No value received!";
    }
} else {
    echo "Invalid request method!";
}
?>
