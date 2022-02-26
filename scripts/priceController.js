export default function priceController(inputSettings, discount) {
  const inputElement = document.getElementById("range");
  const pageviewsElement = document.getElementById("pageviews");
  const checkboxElement = document.getElementById("toggle");
  const priceElement = document.getElementById("price");

  let values = [
    { value: "10K", price: 8 },
    { value: "50K", price: 12 },
    { value: "100K", price: 16 },
    { value: "500K", price: 24 },
    { value: "1M", price: 36 },
  ];

  inputElement.setAttribute("min", inputSettings.min);
  inputElement.setAttribute("max", inputSettings.max);
  inputElement.setAttribute("step", inputSettings.step);

  function changePrice(price) {
    if (checkboxElement.checked) {
      return (price * ((100 - discount) / 100)).toLocaleString("en-US", {
        currency: "USD",
        style: "currency",
      });
    } else {
      return price.toLocaleString("en-US", {
        currency: "USD",
        style: "currency",
      });
    }
  }

  checkboxElement.addEventListener("input", ({ target }) => {
    priceElement.innerText = changePrice(values[inputElement.value].price);
  });

  inputElement.addEventListener("input", ({ target }) => {
    pageviewsElement.innerText = values[target.value]["value"];

    priceElement.innerText = changePrice(values[target.value]["price"]);
  });

  changePrice(values[inputElement.value].price);
}
