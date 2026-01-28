const form = document.getElementById("form");

form.addEventListener("submit", sendWpp);

function sendWpp(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const phone = "5519993919629";

  const text = `Olá! Me chamo ${name}, ${message}`;
  const txtConvert = encodeURIComponent(text);

  const url = `https://wa.me/${phone}/?text=${txtConvert}`;
  window.open(url, "_blank");
}
