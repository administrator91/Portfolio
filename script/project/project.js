// Personal Projects Data
var personalProjectsData = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    title: "Simple-Fast-Port-Scanner",
    paragraph:
      "Port Scanner : you can check the open ports and banner grabbing of any Windows, Linux, MacOS machine..",
    url: "https://github.com/administrator91/Simple_PortScanner",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/4698/4698578.png",
    title: "ToDo_list",
    paragraph:
      "Simplify your life and boost productivity with our user-friendly To-Do List Web App. Stay organized, set priorities, and never miss a deadline again. Your tasks, your way..",
    url: "https://administrator91.github.io/ToDo-list/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/5018/5018543.png",
    title: "Music Player",
    paragraph:
      "A sleek, Python-driven music player with an intuitive GUI. Effortlessly play, pause, and navigate through your music collection for a streamlined listening.",
    url: "https://github.com/administrator91/CodeClause_MusicPlayer",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/3024/3024163.png",
    title: "Packet_Sniffer",
    paragraph:
      "It's a Python-based network analysis tool using Scapy for capturing, analyzing, and inspecting insecure local network packet traffic..",
    url: "https://github.com/administrator91/Packet_Sniffer",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    title: "Tic-Tac-Toe",
    paragraph: "Tic-Tac-Toe : Js/HTML/CSS tic tac toe Game. ",
    url: "https://administrator91.github.io/Tic-Tac-Toe/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/8277/8277654.png",
    title: "Snake_Game",
    paragraph:
      "Hey Buddy!! this is my Simple Snake Game .You can also enjoy listening to music while playing the game..",
    url: "https://administrator91.github.io/Simple_SnakeGame/",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/2/2d/Angry_Birds_promo_art.png",
    title: "Angry Bird",
    paragraph: "This is a Angry Bird Game",
    url: "https://github.com/administrator91/Angry_Bird",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/2344/2344132.png",
    title: "Calculator_Web",
    paragraph: "This is a Simple Web_Calculator",
    url: "https://administrator91.github.io/Calculator_web/",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4420/4420779.png",
    title: "Mail-Application",
    paragraph:
      "Welcome to the Python Mail Application—a user-friendly email sender. With a clean GUI, secure Gmail authentication, and seamless operation, sending emails has never been simpler. Upgrade your communication experience effortlessly.",
    url: "https://github.com/administrator91/CodeClause_MailApplication",
  },
];

// Client Projects Data (add your own data here)
var clientProjectsData = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/922/922699.png",
    title: "BonBhojon",
    paragraph:
      "Designed and developed the BonBhojon restaurant website, featuring immersive ambient design, interactive menu navigation, and an engaging “Truth or Dare” social feature—blending storytelling, UI aesthetics, and mobile responsiveness to deliver a memorable digital dining experience",
    url: "https://github.com/your-repo/client-project-1",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/6238/6238926.png",
    title: "Natabari Crispi Biriyani",
    paragraph:
      "Developed a modern restaurant website – Natabari Crispi Biryani – featuring a responsive design, engaging UI, and smooth user experience to showcase the brand online",
    url: "res/ncb.jpg",
  },
  
];

// Function to generate HTML for a project card
function generateProjectCardHtml(item) {
  return `<div
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
}

// Generate and insert Personal Projects HTML
var personalProjectsHtml = "";
personalProjectsData.forEach(function (item) {
  personalProjectsHtml += generateProjectCardHtml(item);
});
document.getElementById("personal-project-container").innerHTML =
  personalProjectsHtml;

// Generate and insert Client Projects HTML
var clientProjectsHtml = "";
clientProjectsData.forEach(function (item) {
  clientProjectsHtml += generateProjectCardHtml(item);
});
document.getElementById("client-project-container").innerHTML =
  clientProjectsHtml;

var carouselButtons = document.querySelectorAll(
  '[data-bs-target="#projectCarousel"]'
);
carouselButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    var myCarousel = new bootstrap.Carousel(
      document.getElementById("projectCarousel")
    );
    myCarousel.to(index);
  });
});
