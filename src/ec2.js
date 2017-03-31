function citeste(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	
	var coef = [a,b,c];
	return  coef;
	
	
	
}
//********************************************************

function calcul_delta(coeficienti)
{
	return coeficienti[1]*coeficienti[1]- 4*coeficienti[0]*coeficienti[2]
	
}
//********************************************************
function calcul_radacini(coef,delta)

var x1_re,x1_im,x2_re,x2_im;

{if (delta >= 0){
	var x1_re = (-coef[1] - Math.sqrt(delta)) / (2* coef[0])
	var x1_im= 0;
	var x2_re = (-coef[1] - Math.sqrt(delta)) / (2* coef[0])
	var x2_im= 0;
	document.getElementById("x1").innerHTML = x1_re;
	document.getElementById("x2").innerHTML = x2_re;
	}
else{
	var x1_re = (-coef[1] ) / (2* coef[0])
	var x1_im= -Math.sqrt(-delta) / (2* coef[0]);
	var x2_re = (-coef[1] ) / (2* coef[0])
	var x2_im= + Math.sqrt(-delta)/ (2* coef[0]);
	}
return [x1_re,x1_im,x2_re,x2_im]
	
}

function rezolva()
{
	var coef = citeste();
	var delta = calcul_delta(coef);
	var radacini = calcul_radacini(coef,delta);
	afisieaza (radacini)
	}

}
//**********************************************
function afiseaza(radacini)
{
	document.getElementById("x1").innerHTML = radacini[0].toString() + "+" + x1_im + "i";
	document.getElementById("x2").innerHTML = radacini[2].toString() + "+" + x1_im + "i";				
}
