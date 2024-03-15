document.getElementById("mainCategory").addEventListener("change", function () {
  var mainCategory = this.value;
  var subCategoryDropdown = document.getElementById("subCategory");

  // Clear existing options
  subCategoryDropdown.innerHTML = "";

  // Populate subcategory options based on the selected main category
  if (mainCategory === "Housing") {
    addOption(subCategoryDropdown, "Rent", "Rent");
    addOption(subCategoryDropdown, "Mortgage", "Mortgage");
    addOption(subCategoryDropdown, "Energy, utilities", "Energy, utilities");
    addOption(subCategoryDropdown, "Services", "Services");
    addOption(subCategoryDropdown, "Maintenance, repairs", "Maintenance, repairs");
    addOption(subCategoryDropdown, "Property insurance", "Property insurance");
  } else if (mainCategory === "Food & Drinks") {
    addOption(subCategoryDropdown, "Groceries", "Groceries");
    addOption(subCategoryDropdown, "Restaurant, fast-food", "Restaurant, fast-food");
  } else if (mainCategory === "Shopping") {
    addOption(subCategoryDropdown, "Clothes & shoes", "Clothes & shoes");
    addOption(subCategoryDropdown, "Jewels, accessories", "Jewels, accessories");
    addOption(subCategoryDropdown, "Health and beauty", "Health and beauty");
    addOption(subCategoryDropdown, "Kids", "Kids");
    addOption(subCategoryDropdown, "Home, garden", "Home, garden");
    addOption(subCategoryDropdown, "Pets, animals", "Pets, animals");
    addOption(subCategoryDropdown, "Electronics, accessories", "Electronics, accessories");
    addOption(subCategoryDropdown, "Gifts, joy", "Gifts, joy");
    addOption(subCategoryDropdown, "Stationery, tools", "Stationery, tools");
    addOption(subCategoryDropdown, "Free time", "Free time");
    addOption(subCategoryDropdown, "Drug-store, chemist", "Drug-store, chemist");
  } else if (mainCategory === "Transportation") {
    addOption(subCategoryDropdown, "Public transport", "Public transport");
    addOption(subCategoryDropdown, "Taxi", "Taxi");
    addOption(subCategoryDropdown, "Long distance", "Long distance");
    addOption(subCategoryDropdown, "Business trips", "Business trips");
  } else if (mainCategory === "Vehicle") {
    addOption(subCategoryDropdown, "Fuel", "Fuel");
    addOption(subCategoryDropdown, "Parking", "Parking");
    addOption(subCategoryDropdown, "Vehicle maintenance", "Vehicle maintenance");
    addOption(subCategoryDropdown, "Rentals", "Rentals");
    addOption(subCategoryDropdown, "Vehicle insurance", "Vehicle insurance");
    addOption(subCategoryDropdown, "Leasing", "Leasing");
  } else if (mainCategory === "Life & Entertainment") {
    addOption(subCategoryDropdown, "Health care, doctor", "Health care, doctor");
    addOption(subCategoryDropdown, "Wellness, beauty", "Wellness, beauty");
    addOption(subCategoryDropdown, "Active sport, fitness", "Active sport, fitness");
    addOption(subCategoryDropdown, "Culture, sport events", "Culture, sport events");
    addOption(subCategoryDropdown, "Life events", "Life events");
    addOption(subCategoryDropdown, "Hobbies", "Hobbies");
    addOption(subCategoryDropdown, "Education, development", "Education, development");
    addOption(subCategoryDropdown, "Books, audio, subscriptions", "Books, audio, subscriptions");
    addOption(subCategoryDropdown, "TV, streaming", "TV, streaming");
    addOption(subCategoryDropdown, "Holiday, trips, hotels", "Holiday, trips, hotels");
    addOption(subCategoryDropdown, "Charity, gifts", "Charity, gifts");
    addOption(subCategoryDropdown, "Alcohol, tobacco", "Alcohol, tobacco");
    addOption(subCategoryDropdown, "Lottery, gambling", "Lottery, gambling");
  } else if (mainCategory === "Communication, PC") {
    addOption(subCategoryDropdown, "Phone, cell phone", "Phone, cell phone");
    addOption(subCategoryDropdown, "Internet", "Internet");
    addOption(subCategoryDropdown, "Software, apps, games", "Software, apps, games");
    addOption(subCategoryDropdown, "Postal services", "Postal services");
  } else if (mainCategory === "Financial expenses") {
    addOption(subCategoryDropdown, "Taxes", "Taxes");
    addOption(subCategoryDropdown, "Insurances", "Insurances");
    addOption(subCategoryDropdown, "Loan, interests", "Loan, interests");
    addOption(subCategoryDropdown, "Fines", "Fines");
    addOption(subCategoryDropdown, "Advisory", "Advisory");
    addOption(subCategoryDropdown, "Charges, fees", "Charges, fees");
    addOption(subCategoryDropdown, "Child support", "Child support");
  } else if (mainCategory === "Investments") {
    addOption(subCategoryDropdown, "Realty", "Realty");
    addOption(subCategoryDropdown, "Vehicles, chattels", "Vehicles, chattels");
    addOption(subCategoryDropdown, "Financial investments", "Financial investments");
    addOption(subCategoryDropdown, "Savings", "Savings");
    addOption(subCategoryDropdown, "Collections", "Collections");
  } else if (mainCategory === "Income") {
    addOption(subCategoryDropdown, "Wage, invoices", "Wage, invoices");
    addOption(subCategoryDropdown, "Interests, dividends", "Interests, dividends");
    addOption(subCategoryDropdown, "Sale", "Sale");
    addOption(subCategoryDropdown, "Rental income", "Rental income");
    addOption(subCategoryDropdown, "Dues & grants", "Dues & grants");
    addOption(subCategoryDropdown, "Lending, renting", "Lending, renting");
    addOption(subCategoryDropdown, "Checks, coupons", "Checks, coupons");
    addOption(subCategoryDropdown, "Refunds (tax, purchase)", "Refunds (tax, purchase)");
    addOption(subCategoryDropdown, "Child support", "Child support");
    addOption(subCategoryDropdown, "Gifts", "Gifts");
  }
});

function addOption(selectElement, value, text) {
  var option = document.createElement("option");
  option.value = value;
  option.text = text;
  selectElement.appendChild(option);
}

function deleteExpense(expenseId) {
  fetch("/delete-expense", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ expenseId: expenseId }),
  })
    .then((response) => {
      if (response.ok) {
        // If deletion is successful, remove the expense item from the UI
        document.getElementById(expenseId).remove();
         // Update the total amount after deleting the expense
         updateTotalAmount();
      } else {
        // Handle error response
        console.error("Failed to delete expense:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error deleting expense:", error);
    });
}

// Function to calculate and update the total amount
function updateTotalAmount() {
  // Get all the expense amount elements
  const amountElements = document.querySelectorAll('#expense-table-body td:nth-child(3)');

  // Calculate the total amount
  let totalAmount = 0;
  amountElements.forEach(element => {
    totalAmount += parseFloat(element.textContent);
  });

  // Update the total amount element
  document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Call the updateTotalAmount function initially to calculate the total
updateTotalAmount();

function setCurrency(currency) {
  fetch('/update-currency', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ currency: currency })
  })
  .then(response => {
    if (response.ok) {
      console.log('Currency updated successfully');
    } else {
      console.error('Failed to update currency');
    }
  })
  .catch(error => {
    console.error('Error updating currency:', error);
  });
}

document.getElementById("mainCategory").addEventListener("change", function () {
  var mainCategory = this.value;
  var amountInput = document.getElementById("amount");
  
  // Clear existing options
  subCategoryDropdown.innerHTML = "";

  // Populate subcategory options based on the selected main category
  // Code for populating subcategory options...
  
  // If the selected category is 'Income', set the amount input to positive
  // Otherwise, set it to negative
  if (mainCategory === "Income") {
    amountInput.min = "0";  // Set minimum value to 0
    amountInput.step = "any";  // Allow any positive value
  } else {
    amountInput.min = "-999999999"; // Set a negative minimum value
    amountInput.step = "any";  // Allow any negative value
  }
});

// Function to handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
  var mainCategory = document.getElementById("mainCategory").value;
  var amount = parseFloat(document.getElementById("amount").value);
  
  // If the selected category is 'Income', make the amount positive
  // Otherwise, make it negative
  if (mainCategory === "Income") {
    amount = Math.abs(amount);  // Make amount positive
  } else {
    amount = -Math.abs(amount);  // Make amount negative
  }
  
  // Set the modified amount back to the input field
  document.getElementById("amount").value = amount;
});




