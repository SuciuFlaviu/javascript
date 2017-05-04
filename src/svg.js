var c1 = document.getElementById("c1");

c1.addEventListener("touchmove",on_touch_move);

function on_touch_move(e)
{
	var t = e.changedTouch[0];
	c1.setAttribute("cx",t.pageX);
	c1.setAttribute("cy",t.pageY);
	
}