<DOCTYPE html>

<html>

<body>
<input type = "text" id = "a"/>
<input type = "text" id = "b"/>
<input type = "text" id = "c"/>

<button onclick = "rezolva()">Rezolva</button>

<p id = "x1"></p>
<p id = "x2"></p>
<script>


function rezolva()
{
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	
	var delta = b*b - 4*a*c;
	
	if (delta >= 0){
	var x1_re = (-b - Math.sqrt(delta)) / (2* a)
	var x1_im= 0;
	var x2_re = (-b - Math.sqrt(delta)) / (2* a)
	var x2_im= 0;
	document.getElementById("x1").innerHTML = x1_re;
	document.getElementById("x2").innerHTML = x2_re;
	
	}
	else{
	var x1_re = (-b ) / (2* a)
	var x1_im= -Math.sqrt(-delta) / (2* a);
	var x2_re = (-b ) / (2* a)
	var x2_im= + Math.sqrt(-delta)/ (2* a);
	document.getElementById("x1").innerHTML = x1_re.toString() + "+" + x1_im + "i";
	document.getElementById("x2").innerHTML = x2_re.toString() + "+" + x1_im + "i";
	}

}

</script>
</body>

</html>