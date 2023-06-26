function reinbursementVigor() {
	var inputValue = document.getElementById("firstInput").value;
	var secondValue = document.getElementById("secondInput").value;
	var number = parseInt(inputValue);
	var num2 = parseInt(secondValue);
	var result = (number * .2) + (num2);
	document.getElementById("resultOutput").innerHTML = "You would get " + result + " resources back";
  }