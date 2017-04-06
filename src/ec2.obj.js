function citeste(){
	var _a = document.getElementById("a").value;
	var _b = document.getElementById("b").value;
	var _c = document.getElementById("c").value;
	
	
	var coef = {a:_a,b:_b,c:_c};
	return  coef;
	
	
	
}
//********************************************************

function calcul_delta(coeficienti)
{
	return coeficienti.b*coeficienti.b- 4*coeficienti.a*coeficienti.c;
	
}
//********************************************************
function calcul_radacini(coef,delta){

var x1,x2;

if (delta >= 0){
	 x1 = {re:(-coef.b - Math.sqrt(delta)) / (2* coef.a),im:0};
	 
	 x2 = {re:(-coef.b + Math.sqrt(delta)) / (2* coef.a),im:0};
	 
	
	}
else{
	x1 = {re:(-coef.b ) / (2* coef.a),im: - Math.sqrt(-delta) / (2* coef.a)};
	
	x2 = {re:(-coef.b ) / (2* coef.a),im: + Math.sqrt(-delta)/ (2* coef.a)};
	
	}
	var v= {x1:x1,x2:x2};
return v;
	
}
//********************************
function ec2()
{
	this.citeste = function (){
		this.a = document.getElementById("a").value;
		this.b = document.getElementById("b").value;
		this.c = document.getElementById("c").value;
	}
	
	this.rezolva = function(){
		var delta = calcul_delta(this);
		
		if (delta >= 0){
			this.x1 = {re:(-this.b - Math.sqrt(delta)) / (2* this.a),im:0};
			this.x2 = {re:(-this.b + Math.sqrt(delta)) / (2* this.a),im:0};
		}
		else{
			this.x1 = {re:(-this.b ) / (2* this.a),im: - Math.sqrt(-delta) / (2* this.a)};
			this.x2 = {re:(-this.b ) / (2* this.a),im: + Math.sqrt(-delta)/ (2* this.a)};
	
		}
		
	}
	this.afiseaza = function(){
		if(this.x1.im >=0)
	document.getElementById("x1").innerHTML = this.x1.re.toString() + "+" + this.x1.im.toString() + "i";
else
	document.getElementById("x1").innerHTML = this.x1.re.toString() + this.x1.im.toString() + "i";

if(this.x2.im >=0)
	document.getElementById("x2").innerHTML = this.x2.re.toString() + "+" + this.x2.im.toString()  + "i";	
else
	document.getElementById("x2").innerHTML = this.x2.re.toString() + this.x2.im.toString()  + "i";
		
	}
}


function rezolva()
{
	var e = new ec2();
	e.citeste();
	e.rezolva();
	e.afiseaza();

}

//**********************************************
