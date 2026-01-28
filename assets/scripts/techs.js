const techs = document.querySelectorAll(".tech");

techs.forEach((tech) => {
  const color = tech.dataset.color;
  tech.style.setProperty("--hover-color", color);
});
