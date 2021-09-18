var a = document.getElementsByClassName("listElement");
var result = document.getElementById("result");
result.style.margin = "0px";


for (i = 0; i < a.length; i++) {
	a[i].style.display = "none";
}


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
	result.style.padding = "3px";
	result.style.margin = "10px 0px 0px 0px";
	if (id === "apple") {
		result.innerHTML = 'Apple devices can be recycled via Apple Trade In, where store credit <br> can be given: <a href="https://www.apple.com/shop/trade-in"> Link </a> <br> <br> There are also many other providers that will accept your device.';
	}
	else if (id === "samsung") {
		result.innerHTML = 'Samsung has many recycle programs at no cost, which can be found <a href="https://www.samsung.com/us/aboutsamsung/sustainability/environment/responsible-recycling/programs/"> here. </a>';
	}
	else if (id === "google") {
		result.innerHTML = 'You can recycle most Google devices with their recycling program <a href= "https://store.google.com/us/magazine/recycling?hl=en-US">here.</a> <br> You can also use the trade-in program to recieve store credit when buying a new Pixel.';
	}
	else if (id === "emptyMessage") {
		result.innerHTML = 'We could not find a recycling program that is dedicated to your device, but there are many organizations that help recycle most electronics. <a href = "https://call2recycle.org"> Call2Recycle </a> and many <br> other websites will allow you to find nearby recycling centers after inputting your ZIP code.';
	}
	else {
		result.innerHTML = "this is a bug";
	}
}

function searchFocus() {
	a = document.getElementsByClassName("listElement");
	 for (i = 0; i < a.length; i++) {
	a[i].style.display = "";
    }
}