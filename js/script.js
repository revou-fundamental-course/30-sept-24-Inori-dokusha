const btnConvert = document.querySelector("#convert");
const btnReset = document.querySelector("#reset");
const btnReserve = document.querySelector("#reserve");
const userInput = document.querySelector("#celc");
const userOutput = document.querySelector("#fahr");
const infoElement = document.querySelector(".information");
btnConvert.addEventListener("click", () => {
  const textOutput = document.querySelector(".output p");
  const display = (userOutput.value = userInput.value * 1.8 + 32);
  infoElement.style.display = "block";
  textOutput.textContent = `${userInput.value} * 9/5 + 32 = ${display}ºF`;
});

btnReset.addEventListener("click", () => {
  userOutput.value = "";
});

btnReserve.addEventListener("click", () => {
  const userInputElement = userInput.value;
  const userOutputElement = userOutput.value;
  if (userInputElement && userOutputElement) {
    localStorage.setItem("lastInput", userInputElement);
    localStorage.setItem("lastOutput", userOutputElement);
    alert("Data berhasil disimpan!");
  } else {
    alert("Silakan masukkan suhu sebelum menyimpan.");
  }
});
