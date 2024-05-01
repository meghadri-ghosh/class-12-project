const popup = document.querySelector(".popup");
function toggle_popup() {
    popup.classList.add("center");
}

const mainPopup = document.querySelector(".main-popup");
const header = document.querySelector("header");
function handleScroll(e) {
  e.preventDefault();
  //window.removeEventListener("wheel", handleScroll);
  mainPopup.style.display = "block";
  header.classList.remove("header");
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

