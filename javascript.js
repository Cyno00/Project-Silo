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