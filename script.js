document.addEventListener("DOMContentLoaded", function() {
    var textField = document.getElementById("myTextField");

    // Stuur de initiële waarde van het tekstveld zodra de pagina is geladen
    sendData(textField.value);

    // Voeg een event listener toe om de waarde te sturen bij elke verandering
    textField.addEventListener("input", function() {
        sendData(textField.value);
    });
});

function sendData(value) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("response").innerText = xhr.responseText;
        }
    };

    xhr.send("myTextField=" + encodeURIComponent(value));
}
