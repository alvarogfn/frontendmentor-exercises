export default function sliderAnimation() {
  const rangeElement = document.querySelector("#range");

  const min = rangeElement.getAttribute("min");
  const max = rangeElement.getAttribute("max");

  rangeElement.value = "50%";

  rangeElement.addEventListener("input", (e) => {
    const actualValue = e.target.value;
    const percentage = (100 * actualValue) / (min * -1 + max);
    rangeElement.style.setProperty("--progress", percentage + "%");
  });
}
