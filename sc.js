function downloadResume() {
    // You can replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumePath = 'https://drive.google.com/file/d/1Iusq1ipDRoW99417123AfkATk00X0C5L/view?usp=drivesdk';

    // Creating a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
