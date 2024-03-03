var dataJson = [
    {
    "img": "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    "title": "Simple-Fast-Port-Scanner",
    "paragraph":"Port Scanner : you can check the open ports and banner grabbing of any Windows, Linux, MacOS machine..",
    "url":"https://github.com/administrator91/Simple_PortScanner"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/4698/4698578.png",
    "title": "ToDo_list",
    "paragraph":"Simplify your life and boost productivity with our user-friendly To-Do List Web App. Stay organized, set priorities, and never miss a deadline again. Your tasks, your way..",
    "url":"https://administrator91.github.io/ToDo-list/"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/512/5018/5018543.png",
    "title": "Music Player",
    "paragraph":"A sleek, Python-driven music player with an intuitive GUI. Effortlessly play, pause, and navigate through your music collection for a streamlined listening.",
    "url":"https://github.com/administrator91/CodeClause_MusicPlayer"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/3024/3024163.png",
    "title": "Packet_Sniffer",
    "paragraph":"It's a Python-based network analysis tool using Scapy for capturing, analyzing, and inspecting insecure local network packet traffic..",
    "url":"https://github.com/administrator91/Packet_Sniffer"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    "title": "Tic-Tac-Toe",
    "paragraph":"Tic-Tac-Toe : Js/HTML/CSS tic tac toe Game. ",
    "url":"https://administrator91.github.io/Tic-Tac-Toe/"
  },
  {
    "img": "https://t3.ftcdn.net/jpg/00/02/03/32/240_F_2033260_xOH9OumIoBCi6KqrFld0OPQRJpCj6K.jpg",
    "title": "Snake_Game",
    "paragraph":"Hey Buddy!! this is my Simple Snake Game .You can also enjoy listening to music while playing the game..",
    "url":"https://administrator91.github.io/Simple_SnakeGame/"
  },
  {
    "img": "https://upload.wikimedia.org/wikipedia/en/2/2d/Angry_Birds_promo_art.png",
    "title": "ANGRY BIRD",
    "paragraph":"This is a Angry Bird Game",
    "url":"https://github.com/administrator91/Angry_Bird"
  },
  {
    "img": "https://img.freepik.com/free-vector/vector-realistic-calculator-button-electronic-digit-calculation-display-minus-plus-illustration_1284-42370.jpg?size=626&ext=jpg&ga=GA1.1.1225026954.1700406531&semt=ais",
    "title": "Calculator_Web",
    "paragraph":"This is a Simple Web_Calculator",
    "url":"https://administrator91.github.io/Calculator_web/"
  },
  {
  "img": "https://img.freepik.com/premium-vector/letter-with-declaration-love-mail-envelope-with-heart-hand-drawn-message-valentines-day-declaration-love-vector-illustration-isolated-white-background_192280-639.jpg",
  "title": "Mail-Application",
  "paragraph":"Welcome to the Python Mail Application—a user-friendly email sender. With a clean GUI, secure Gmail authentication, and seamless operation, sending emails has never been simpler. Upgrade your communication experience effortlessly.",
  "url":"https://github.com/administrator91/CodeClause_MailApplication"
  }
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

