function genQR() {
    var text = document.getElementById("url").value;
    var qrContainer = document.getElementById("qrcode");

    if (text === "") {
        document.getElementById("url").style.border = "2px solid #ff0000";
        return;
    } else {
        document.getElementById("url").style.border = "none";
    }

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#f8fafc",
        colorLight: "#0d1117", 
        correctLevel: QRCode.CorrectLevel.H
    });
}

function resetForm() {
    document.getElementById("url").value = "";
    document.getElementById("qrcode").innerHTML = ""; 
}
function downloadQR() {
    var qrCanvas = document.querySelector("#qrcode canvas");
    if (!qrCanvas) {
        alert("Generate a QR code first!");
        return;
    }

    var qrImage = qrCanvas.toDataURL("image/png"); 
    var link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png"; 
    link.click(); 
}
