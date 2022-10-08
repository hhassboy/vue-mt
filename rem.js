const baseSize = 16;
function setRem () {
  if (window.screen.height / window.screen.width <= 1.78 && window.screen.height / window.screen.width > 1) {
    document.documentElement.getElementsByTagName("body")[0].classList.add("short");
  }else{
    document.documentElement.getElementsByTagName("body")[0].classList.remove("short");
  }
  const scale = document.documentElement.clientWidth / 1920;
  if (document.documentElement.clientWidth < 750) {
    document.documentElement.style.fontSize  = document.documentElement.clientWidth*16/750 + 'px'
  } else {
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
  }
}

window.onresize = function () {
    setRem();
}
window.addEventListener('load', setRem, false);
document.addEventListener('DOMContentLoaded', setRem, false);