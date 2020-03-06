let prevScrollpos = window.pageYOffset;
let fullName = document.querySelector(".masthead__fullName");
let shortName = document.querySelector(".masthead__shortName");

function scrollToSection(id) {
  document.querySelector("." + id).scrollIntoView({
    behavior: "smooth"
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function showSideBar(x) {
  sideBar = document.querySelector(".sideBar");
  x.classList.toggle("navBar__hamburguer--mod");
  if (sideBar.style.right == "-12rem" || sideBar.style.right == "") {
    sideBar.style.right = 0;
  } else {
    sideBar.style.right = "-12rem";
  }
}

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navBar").style.top = "0";
  } else {
    document.querySelector(".navBar").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
};

fullName.addEventListener(
  "mouseenter",
  function(event) {
    shortName.style.display = "block";
    shortName.style.color = getRandomColor();
  },
  false
);
