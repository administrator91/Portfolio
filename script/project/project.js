var dataJson = [
    {
        "img": "https://cdn-icons-png.flaticon.com/128/644/644667.png",
        "title": "Simple-Fast-Port-Scanner",
        "paragraph":"Port Scanner : you can check the open ports and banner grabbing of any Windows, Linux, MacOS machine..",
        "url":"https://github.com/administrator91/Simple_PortScanner"
    },
    {
        "img": "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
        "title": "Tic-Tac-Toe",
        "paragraph":"Tic-Tac-Toe : Js/HTML/CSS tic tac toe Game. ",
        "url":"https://administrator91.github.io/Tic-Tac-Toe/"
    },
    {
        "img": "https://upload.wikimedia.org/wikipedia/en/2/2d/Angry_Birds_promo_art.png",
        "title": "ANGRY BIRD",
        "paragraph":"This is a Angry Bird Game",
        "url":"https://github.com/administrator91/Angry_Bird"
    },
    {
      "img": "https://user-images.githubusercontent.com/143781304/274919305-fe318d7e-47ad-4281-8dfc-43267a0de017.png",
      "title": "Calculator_Web",
      "paragraph":"This is a Simple Web_Calculator",
      "url":"https://administrator91.github.io/Calculator_web/"
    },
    {
    "img": "https://t3.ftcdn.net/jpg/00/02/03/32/240_F_2033260_xOH9OumIoBCi6KqrFld0OPQRJpCj6K.jpg",
    "title": "Simple_SnakeGame",
    "paragraph":"Hey Buddy!! this is my Simple Snake Game .You can also enjoy listening to music while playing the game..",
    "url":"https://administrator91.github.io/Simple_SnakeGame/"
    },
    
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content;">
    <div
      style="padding: 12px"
      class="project progress mb-5 align-items-center">
      <img
        class="img-fluid"
        style="height: 90px; width: 90px"
        src="${item.img}"
        alt="${item.title}"
        height="100px"
        width="120px"
      />
      <div class="mt-3 ms-3 row">
        <h2 style="color: txt-color">${item.title}</h2>
        <p style="color: txt-color; font-size: medium">
        ${item.paragraph}
        </p>
        <a
          rel="noopener"
          href="${item.url}"
          target="_blank"
          title="${item.title}">
          <button type="button" class="btn btn-secondary">
            View
          </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;

