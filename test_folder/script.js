function runPro() {
    let totalCost = 0;
    let morePizzas = true;
  
    while (morePizzas) {
      var gettingPizzaprice = gettingPizza();
      var pizzaCookPrice = pizzaCook();
      var toppingsPrice = toppings();
      var militaryDiscount = militaryDis();
      var mayHaveCoup = haveCoup();
      var taxes = 0.10; // Tax rate
      var subtotal = gettingPizzaprice + pizzaCookPrice + toppingsPrice;
      var discount = subtotal * (militaryDiscount + mayHaveCoup);
      var total = subtotal - discount + subtotal * taxes;
  
      totalCost = totalCost + total;
  
      alert("The total for this pizza is: $" + Math.ceil(total * 100) / 100);
  
      // Ask if the user wants to order more pizzas
      var orderMore = prompt("Do you want to order another pizza? Enter 'y' for yes, 'n' for no:");
      if (orderMore.toLowerCase() !== 'y') {
        morePizzas = false;
      }
    }
  
    alert("Your total for all pizzas is: $" + Math.ceil(totalCost * 100) / 100);
  }
  
  
  /* Are you getting your pizza delivered or picked up */
  function gettingPizza() {
    var howPizzaGet = prompt("Will you be doing pick up or delivery? Enter 'a' for pick up, 'b' for delivery:");
    if (howPizzaGet === 'a') {
      alert("You will be picking up your pizza. No charge added.");
      return 0;
    } else if (howPizzaGet === 'b') {
      alert("You will be having your pizza delivered. $3.99 added.");
      return 3.99;
    } else {
      alert("Please enter 'a' or 'b'.");
      return gettingPizza(); // Recursive call for valid input
    }
  }
  
  /* How are you getting your pizza cooked */
  function pizzaCook() {
    var special = prompt("Do you want your pizza specially cooked? Enter 'y' for yes, 'n' for no:");
    if (special === 'y') {
      var howCooked = prompt("How do you want your pizza cooked? \nDeep dish: 'a' \nThin crust: 'b' \nStuffed crust: 'c'");
      if (howCooked === 'a') {
        alert("You have entered Deep dish. That is $9.99.");
        return 9.99;
      } else if (howCooked === 'b') {
        alert("You have entered Thin crust. That is $4.99.");
        return 4.99;
      } else if (howCooked === 'c') {
        alert("You have entered Stuffed crust. That is $7.99.");
        return 7.99;
      } else {
        alert("Please enter 'a', 'b', or 'c'.");
        return pizzaCook();
      }
    } else if (special === 'n') {
      alert("You do not want your pizza specially cooked. No additional price added.");
      return 2.99;
    } else {
      alert("Please enter 'y' or 'n'.");
      return pizzaCook();
    }
  }
  
  /* What toppings are you getting and the price of them */
  function toppings() {
    var wantToppings = prompt("Do you want toppings? Enter 'y' for yes, 'n' for no:");
    if (wantToppings === 'y') {
      var typeToppings = prompt("What toppings do you want? \nMushrooms: 'a' \nPepperonis: 'b' \nSausage: 'c'");
      if (typeToppings === 'a') {
        alert("You have entered Mushrooms. That is $2.99.");
        return 2.99 + wantMoreT(); // Recursively add more toppings
      } else if (typeToppings === 'b') {
        alert("You have entered Pepperonis. That is $0.99.");
        return 0.99 + wantMoreT();
      } else if (typeToppings === 'c') {
        alert("You have entered Sausage. That is $4.99.");
        return 4.99 + wantMoreT();
      } else {
        alert("Please enter 'a', 'b', or 'c'.");
        return toppings();
      }
    } else if (wantToppings === 'n') {
      alert("You do not want toppings. No additional price added.");
      return 0;
    } else {
      alert("Please enter 'y' or 'n'.");
      return toppings();
    }
  }
  
  /* If you are getting more toppings */
  function wantMoreT() {
    var wantMoreTop = prompt("Do you want more toppings? Enter 'y' for yes, 'n' for no:");
    if (wantMoreTop === 'y') {
      return toppings(); // Call toppings again for additional options
    } else if (wantMoreTop === 'n') {
      alert("You do not want any more toppings.");
      return 0;
    } else {
      alert("Please enter 'y' or 'n'.");
      return wantMoreT();
    }
  }
  
  /* Are you currently or have you been in the military */
  function militaryDis() {
    var mDiscount = prompt("Are you currently or have you been in the military? Enter 'y' for yes, 'n' for no:");
    if (mDiscount === 'y') {
      alert("Thank you for your service. 10% deducted from your total.");
      return 0.10;
    } else if (mDiscount === 'n') {
      alert("You are not in the military. No discount applied.");
      return 0;
    } else {
      alert("Please enter 'y' or 'n'.");
      return militaryDis();
    }
  }
  
  /* Do you have a coupon */
  function haveCoup() {
    var hasCoup = prompt("Do you have a coupon? Enter 'y' for yes, 'n' for no:");
    if (hasCoup === 'y') {
      var coupCode = prompt("What is the coupon code? Hint: look at the first letter of every function.");
      if (coupCode === "rgptwmh") {
        alert("That coupon is correct. 20% deducted from your total.");
        return 0.20;
      } else {
        alert("That is not a valid coupon. Please try again.");
        return haveCoup();
      }
    } else if (hasCoup === 'n') {
      alert("You have no coupon. No discount applied.");
      return 0;
    } else {
      alert("Please enter 'y' or 'n'.");
      return haveCoup();
    }
  }
  

  