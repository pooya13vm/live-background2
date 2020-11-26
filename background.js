const icon = [
  "fa-facebook",
  "fa-twitter",
  "fa-instagram",
  "fa-linkedin-in",
  "fa-github",
  "fa-youtube",
];
const iconColor = [
  "#1877F2",
  " #50ABF1",
  " #e04040",
  "#0077B5",
  "#000",
  " #FF0000",
];

function createiTag() {
  const section = document.querySelector("section");
  const iTag = document.createElement("i");
  iTag.classList.add("fab");
  let randomIcon = Math.floor(Math.random() * icon.length);
  iTag.classList.add(icon[randomIcon]);
  iTag.style.color = iconColor[randomIcon];
  let size = Math.random() * 50;
  iTag.style.fontSize = 10 + size + "px";

  iTag.style.top = Math.random() * innerHeight + "px";
  iTag.style.left = Math.random() * innerWidth + "px";

  section.appendChild(iTag);

  setTimeout(() => {
    iTag.remove();
  }, 5000);
}

setInterval(createiTag, 60);
