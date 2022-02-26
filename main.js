import "./style.scss";
import sliderAnimation from "./scripts/sliderAnimation";
import toggleAnimation from "./scripts/toggleAnimation";
import priceController from "./scripts/priceController";

// amount_traffic's input
const input_range = {
  min: 0,
  max: 4,
  step: 1,
};

const discount = 25; // percent

priceController(input_range, discount);
sliderAnimation(input_range);
toggleAnimation();
