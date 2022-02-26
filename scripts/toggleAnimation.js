export default function toggleAnimation() {
  const toggleElement = document.querySelector("#toggle");
  const checkboxElement = document.querySelector("#checkbox");
  toggle.checked = false;

  toggleElement.addEventListener("input", (e) => {
    if (e.target.checked) {
      checkboxElement.classList.add("checkbox--active");
    } else {
      checkboxElement.classList.remove("checkbox--active");
    }
  });
}
