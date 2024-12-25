const Api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const inputText = document.getElementById("inputText");
const Button = document.querySelector(".Button");
const imgBox = document.querySelector(".imgBox");
const imgBoxImage = document.querySelector(".imgBox img");

function QrGenerator() {
  if (inputText.value.trim() == "") {
    inputText.classList.add("error");
    setTimeout(() => {
      alert("Please Enter your Text or URL");
      inputText.classList.remove("error");
    }, 1000);
  } else {
    imgBoxImage.src = `${Api}${inputText.value}`;
    imgBox.style.display = "block";
  }
}

Button.addEventListener("click", QrGenerator);
