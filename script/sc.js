function downloadResume() {
    // path
    const resumePath = 'https://drive.google.com/file/d/1otsCM1ekafmYIlswOdfu-Q7hYdnVKaKu/view?usp=drivesdk';

    // Creating a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
