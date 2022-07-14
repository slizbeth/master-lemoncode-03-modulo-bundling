import "./styles.scss";
import logoImg from "./content/logo_1.png";

const img = document.createElement("img");
img.src = logoImg;
img.classList.add('icon');

const div = document.getElementById('card-icon');
div.appendChild(img);