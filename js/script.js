const flexContainer = document.querySelector(".container");
const justifyContentDropdown = document.getElementById("justify-content");
const flexWrapDropdown = document.getElementById("flex-wrap");
const alignItemsDropdown = document.getElementById("align-items");
const alignContentDropdown = document.getElementById("align-content");
const gapInput = document.getElementById("gap");
const orderSelect = document.getElementById("order");
const orderValue = document.getElementById("order-value");
const updateOrderBtn = document.getElementById("update-order");

flexContainer.style.justifyContent = justifyContentDropdown.value;
flexContainer.style.flexWrap = flexWrapDropdown.value;
flexContainer.style.alignItems = alignItemsDropdown.value;
flexContainer.style.alignContent = alignContentDropdown.value;
flexContainer.style.gap = gapInput.value + "px";

justifyContentDropdown.addEventListener("change", (event) => {
  flexContainer.style.justifyContent = event.target.value;
});

flexWrapDropdown.addEventListener("change", (event) => {
  flexContainer.style.flexWrap = event.target.value;
});

alignItemsDropdown.addEventListener("change", (event) => {
  flexContainer.style.alignItems = event.target.value;
});

alignContentDropdown.addEventListener("change", (event) => {
  flexContainer.style.alignContent = event.target.value;
});

gapInput.addEventListener("input", (event) => {
  flexContainer.style.gap = event.target.value + "px";
});

updateOrderBtn.addEventListener("click", () => {
  const selectedDiv = document.querySelector(
    `.container > *:nth-child(${orderSelect.value})`
  );
  if (selectedDiv) {
    selectedDiv.style.order = orderValue.value;
  }
});
