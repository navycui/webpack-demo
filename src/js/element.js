import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import "../font/iconfont.css";

import pnggggg from "../img/pngwing.com.png";


const divEl = document.createElement("div")
divEl.className = "title";
divEl.innerHTML = "hello dsworfsfdasdsdfdfld";

// 배경사진 설정
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

const imgEl = document.createElement('img');
imgEl.src = pnggggg;

// font 
const iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);