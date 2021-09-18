function filterFunction() {
  var count = 0; 
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = document.getElementsByClassName("listElement");
  var empty = document.getElementById("blankMessage");
  
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
	  count++;
    } else {
	  if (a[i].id != "blankMessage") {
		a[i].style.display = "none";
	  }
    }
	
  }
}

function listClick(elmt) {
	var result = document.getElementById("result");
	var id = elmt.id;
	if (id === "apple") {
		result.innerHTML = "apple";
	}
	else if (id === "samsung") {
		result.innerHTML = "samsung";
	}
	else if (id === "blankMessage") {
		result.innerHTML = "other";
	}
	else {
		result.innerHTML = "this is a bug";
	}
}
