function toggleSpoiler(element) {
  // add/remove "hidden" class
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};
