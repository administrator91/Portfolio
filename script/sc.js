document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("downloadButton").addEventListener("click", function () {
        // Replace 'YOUR_FILE_ID' with your actual Google Drive file ID
        var resumeUrl = "https://drive.google.com/file/d/1kW8ADPyaxNi4nYQF7KwX-DA8xSvP35ZF/view?usp=drivesdk";

        var a = document.createElement("a");
        a.href = resumeUrl;
        a.target = "_blank"; // Opens in a new tab (optional)
        a.download = "Rajarshi_Sarkar_Resume.pdf"; // Set the desired file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
