const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");
function pageTranslations() {
  sectBtn.forEach((e) => {
    e.addEventListener("click", (event) => {
      sectBtn.forEach((ele) => ele.classList.remove("active-btn"));
      if (!event.target.classList.contains("active-btn")) {
        event.target.classList.add("active-btn");
      }
    });
  });

  allSections.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    if (id) {
      sectBtn.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      sections.forEach((sec) => sec.classList.remove("active"));
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

pageTranslations();

function imgEffect() {
  if (mediaQuery.matches) {
    let img = document.querySelector(".image");
    let shape = document.querySelector(".shap");
    let info = document.querySelector(".info");
    img.addEventListener("mouseover", (e) => {
      shape.classList.add("arrow");
      img.classList.add("arrow2");
    });
    shape.addEventListener("animationend", () => {
      info.classList.add("apper");
    });
  }
}

const mediaQuery = window.matchMedia("(min-width:1040px)");

imgEffect();
// start storage theme
const lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector(".theme-btn");

const enableLightMode = () => {
  let body = document.body;
  body.classList.add("light-mode");
  localStorage.setItem("lightMode", "enabled");
};
const disableLightMode = () => {
  let body = document.body;
  body.classList.remove("light-mode");
  localStorage.setItem("lightMode", null);
};

if (lightMode == "enabled") {
  enableLightMode();
}

lightModeToggle.addEventListener("click", (e) => {
  const lightMode = localStorage.getItem("lightMode");
  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
