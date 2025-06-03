// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// Constants
const PRICE_SMALL = 4.00;
const PRICE_LARGE = 45.00;
const TOPPING_BERRIES = 4.00;
const TOPPING_CHERRY = 3.50;
const HST_RATE = 0.13; // Ontario's HST rate is 13%

// Function to calculate the price
function calculatePrice() {
  // Get the selected cheesecake size
  let size = document.getElementById("cheesecake-size").value;
  
  // Get whether the user selected the toppings
  let hasBerries = document.getElementById("berries").checked;
  let hasCherry = document.getElementById("cherry").checked;

  // Set cheesecake price based on size
  let cheesecakePrice = 0; // Default to 0 for "No Size"
  if (size === "small") cheesecakePrice = PRICE_SMALL;
  else if (size === "large") cheesecakePrice = PRICE_LARGE;

  // Calculate the total price for toppings
  let toppingsPrice = 0;
  if (hasBerries) toppingsPrice += TOPPING_BERRIES;
  if (hasCherry) toppingsPrice += TOPPING_CHERRY;

  // Calculate subtotal, tax, and total
  let subtotal = cheesecakePrice + toppingsPrice;
  let tax = subtotal * HST_RATE;
  let total = subtotal + tax;

  // Display the results in the 'result' div
  document.getElementById("result").innerHTML =
    `<p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>` +
    `<p><strong>Tax (HST 13%):</strong> $${tax.toFixed(2)}</p>` +
    `<p><strong>Total:</strong> $${total.toFixed(2)}</p>`;
}
