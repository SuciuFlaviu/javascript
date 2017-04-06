

window.addEventListener("deviceorientation",on-device_orientation)

function on_device_orientation(evt)
{
	var alpha = evt.alpha;
	var beta = evt.beta;
	var.gama  = evt.gamma;
	
	document.getElementById("a").innerHTML = "alpha = "+ alpha.toString()"
	document.getElementById("b").innerHTML = "beta = "+ beta.toString();
	document.getElementById("g").innerHTML = "gamma = "+ gama.toString();
}