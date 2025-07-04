let economicSlider = document.getElementById("economicPolicy");
let foreignSlider = document.getElementById("foreignPolicy");

economicSlider.oninput = () => {
  console.log("Economic: " + economicSlider.value);
};

foreignSlider.oninput = () => {
  console.log("Foreign: " + foreignSlider.value);
};
