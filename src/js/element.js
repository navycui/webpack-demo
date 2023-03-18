import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import pnggggg from "../img/pngwing.com.png";


const divEl = document.createElement("div")
divEl.className = "title";
divEl.innerHTML = "hello world";

// 배경사진 설정
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

const imgEl = document.createElement('img');
imgEl.src = pnggggg;


document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);