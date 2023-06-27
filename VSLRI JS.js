function reinbursementVigor() {
	var inputValue = document.getElementById("firstInput").value;
	var secondValue = document.getElementById("secondInput").value;
	var number = parseInt(inputValue);
	var num2 = parseInt(secondValue);
	var result = (number * .2) + (num2);
	document.getElementById("resultOutput").innerHTML = "You would get " + result + " resources back";
  }
function searchHeadings() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var headings = document.querySelectorAll("h1, h2, h3");
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    for (var i = 0; i < headings.length; i++) {
        var title = headings[i].innerText.toLowerCase();
        if (title.includes(searchInput)) {
            var link = document.createElement("a");
            link.href = "#" + headings[i].id;
            link.textContent = headings[i].innerText;
            resultsContainer.appendChild(link);
            resultsContainer.appendChild(document.createElement("br"));
        }
    }
}
