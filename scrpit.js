function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  let formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  let formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return formattedLast + ", " + formattedFirst;
}


console.log(formatFullName("john", "DOE")); 
console.log(formatFullName("", "smith"));

function calculateTotalCost(price, quantity, taxRate) {
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    return "Invalid input.";
  }

  let totalCost = (price * quantity) * (1 + taxRate);
  return totalCost;
}

console.log(calculateTotalCost(10, 2, 0.07)); 
console.log(calculateTotalCost(10, 2, 0.07, 5));  

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) {
    return "You are eligible.";
  } else if (age > 18 && !isEmployed) {
    return "You are conditionally eligible.";
  } else {
    return "You are not eligible.";
  }
}

console.log(checkEligibility(25, true));

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount)) {
    return "Invalid input.";
  }

  let subtotal = (price * quantity) - discount;
  let totalCost = subtotal * (1 + taxRate);

  return totalCost;
}


console.log(calculateTotalCost(10, 2, 0.07, 5)); 
console.log(calculateTotalCost(10, 2, 0.07));  
console.log(checkEligibility(25, true));
