document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("downloadButton").addEventListener("click", function () {
        var resumeUrl = "https://drive.google.com/file/d/1kW8ADPyaxNi4nYQF7KwX-DA8xSvP35ZF/view?usp=drivesdk";

        var a = document.createElement("a");
        a.href = resumeUrl;
        a.download = "Rajarshi_Sarkar_Resume.pdf"; // Set file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
