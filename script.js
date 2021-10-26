const toggle = document.querySelector(".pricing_toggle-input");
const price = document.querySelector(".js-price");
const viewCount = document.querySelector(".pricing_views-count");
const slider = document.querySelector(".pricing_slider-input");
const subs = document.querySelector(".pricing_subs");
const progressBar = document.querySelector(".fill");
const viewsList = ["10K", "50K", "100K", "500K", "1M"];
const pricesList = [8, 12, 16, 24, 36];
const displayView = (value = slider.value) => {
  viewCount.textContent = viewsList[value];
  if (value == 0) {
    progressBar.style.width = "0%";
  } else if (value == 1) {
    progressBar.style.width = "25%";
  } else if (value == 2) {
    progressBar.style.width = "50%";
  } else if (value == 3) {
    progressBar.style.width = "75%";
  } else if (value == 4) {
    progressBar.style.width = "100%";
  }
};
const displayPrice = () => {
  price.textContent = toggle.checked ? pricesList[slider.value] * 0.75 : pricesList[slider.value];
  subs.textContent = toggle.checked ? "/ year" : "/ month";
};
displayView();
displayPrice();
slider.addEventListener("input", () => {
  displayView();
  displayPrice();
});
toggle.addEventListener("input", () => {
  displayPrice();
});
