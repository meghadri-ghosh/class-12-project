const popup = document.querySelector(".popup");
const mainPopup = document.querySelector(".main-popup");
const header = document.querySelector("header");


function showPopup() {
    popup.classList.add("center");
}



function handleScroll(e) {
  mainPopup.style.display = "block";
  header.classList.remove("normal-header");
  header.classList.add("small-header");
}

function closePopup(){
  popup.classList.add("animate-reverse");
  setTimeout(() => {
    popup.classList.remove("animate-reverse");
    popup.classList.remove("center");
  }, 500);
  
  
}

window.addEventListener("wheel", handleScroll);

