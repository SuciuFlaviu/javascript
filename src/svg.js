var c1 = document.getElementById("cerc1");
var c2 = document.getElementById("cerc2");

c1.addEventListener("touchmove",on_touch_move);
c2.addEventListener("touchmove",on_touch_move);

function on_touch_move(e)

{
for (var i = o;i<e.changedTouches.length;i++){
	
	var t = e.changedTouches[i];
	var c = t.target;
	c1.setAttribute("cx", t.pageX);
	c1.setAttribute("cy", t.pageY);
	
}

