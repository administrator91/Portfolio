var dataJson = [
    {
        "name": "Web Development",
        "width": "45%"
    }, 
    , {
        "name": "Ethical Hacking & Cyber Security",
        "width": "63%"
    },{
        "name": "C++",
        "width": "60%"
    }, {
        "name": "Python",
        "width": "65%"
    },
    {
        "name": "Computer Network's",
        "width": "55%"
    },{
        "name": "Shell Scripting",
        "width": "60%"
    },
    {
        "name": "Web Security & Bug Hunting",
        "width": "42%"
    },
    {
        "name": "Network Security",
        "width": "65%"
    },
    {
        "name": "Active Directory Attacks",
        "width": "65%"
    },
    {
        "name": "Linux & Windows Exploitation",
        "width": "65%"
    },
    {
        "name": "Malware Analysis",
        "width": "40%"
    }
];

var raw_html = "";
var raw_progress = "";

dataJson.forEach(function(item){
    raw_progress += `<p class="fs-5 txt-color">${item.name}</p>
    <div class="progress mb-5 p-0">
      <div class="p1" style="width: ${item.width}">${item.width}</div>
    </div>`
    createRow(raw_progress)
})

function createRow(data) {
    raw_html += "<div class=\"col-lg-6 col-sm-10 col-md-6\">".concat(data, "</div>");
    raw_progress = "";
}
document.getElementById('progress-data').innerHTML = raw_html;
