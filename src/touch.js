window.addEventListener("touchstart",on_touch_start);

var touch_colors = ["#ffcc29",,"#00007f","#43b1c1","#fef65b"];

function on_touch_start(evt)
{
		var touches = evt.changedTouches;
		
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		
		for(var i = 0;i < touches.length; i++)
		{
			ctx.beginPath();
			ctx.strokeStyle = touch_colors[i];
		    ctx.arc(touches[i].pageX,touches[i].pageY,5,0,2 * Math.PI);
			ctx.stroke();
			
		}
}