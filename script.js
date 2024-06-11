const textAreaInput = document.querySelector(".textarea");
const counterValue = document.querySelector(".counter");

textAreaInput.addEventListener("keyup", () => {
  countCharacters();
});

function countCharacters() {
  const length = textAreaInput.value.length;
  counterValue.innerHTML = `${length}`;
}
