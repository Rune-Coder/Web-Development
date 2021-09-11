$(document).ready(function()
{
	var arr = ["c5","c2","c1","c3","c4","c5","c6","c7","c8"];
	var c = 1;
	var mo="";
	var mv="";
	$(".result").hide();
	$("#board").hide();
	$("#rstrt").hide();
	$("#x").click(function(){
		
	$("#board").show();
	$(".btn").hide();
	$("td").click(box);
	function box(event)
	{
		var id = event.target.id;
		if(document.getElementById(id).innerHTML == "" && c <= 5)
		{
			document.getElementById(id).innerHTML = "X";
			if(c == 5)
				xydrw();
			c++;
			moveo();
		}
	}
	function moveo()
	{
		mv = owin();
		if (mv != "nowin")
		{
			document.getElementById(mv).innerHTML = "O";
			xlose();
		}
		else
		{
			mv = xwin();
			if (mv != "nxwin")
				document.getElementById(mv).innerHTML = "O";
			else
			{
				for(var i =0; i< arr.length; i++)
				{
					if(document.getElementById(arr[i]).innerHTML == "")
					{
						document.getElementById(arr[i]).innerHTML = "O";
						break;
					}
				}
			}
		}
		
	}
	function getval(add)
	{
		return document.getElementById(add).innerHTML;
	}
	function check(a,b,c,n)
	{
		if(getval(a) == n && getval(b) == n && getval(c) == "")
		{
			mo = c;
			return true;
		}
		else if(getval(a) == n && getval(b) == "" && getval(c) == n)
		{
			mo = b;
			return true;
		}
		else if(getval(a) == "" && getval(b) == n && getval(c) == n)
		{
			mo = a;
			return true;
		}
		mo = "";
		return false;
	}
	function owin()
	{
		if(check("c1","c2","c3","O") == true || check("c4","c5","c6","O") == true || check("c7","c8","c9","O") == true || check("c1","c4","c7","O") == true ||
		   check("c2","c5","c8","O") == true || check("c3","c6","c9","O") == true || check("c1","c5","c9","O") == true || check("c3","c5","c7","O") == true)
			return mo;
		return "nowin";
	}
	function xwin()
	{
		if(check("c1","c2","c3","X") == true || check("c4","c5","c6","X") == true || check("c7","c8","c9","X") == true || check("c1","c4","c7","X") == true ||
		   check("c2","c5","c8","X") == true || check("c3","c6","c9","X") == true || check("c1","c5","c9","X") == true || check("c3","c5","c7","X") == true)
			return mo;
		return "nxwin";
	}
	function xlose()
	{
		c=6;
		$("#win").show();
		$("#rstrt").show();
	}
	function xydrw()
	{
		$("#drw").show();
		$("#rstrt").show();
	}
	$("#rstrt").click(function(){
		location.reload();
	});
	
	});
	$("#o").click(function(){
		
	$("#board").show();
	$(".btn").hide();
	document.getElementById("c9").innerHTML = "X";
	var f = 0;
	var i = 0;
	var x = 1;
	var g = 0;
	$("td").click(box);
	function box(event)
	{
		var id = event.target.id;
		if(document.getElementById(id).innerHTML == "" && c <= 5)
		{
			document.getElementById(id).innerHTML = "O";
			if((c == 1 && id == "c5") || f == 1)
			{				
				c++;
				f=1;
				movex();
			}
			else if(f == 0)
			{
				if((c == 1 && (id == "c4" || id == "c7" || id == "c8")) || g == 1)
				{
					document.getElementById("c3").innerHTML = "X";
					g=1;
					if (c == 2 && id != "c6")
					{
						document.getElementById("c6").innerHTML = "X";
						olose();
					}
					else if(c ==2 && id == "c6")
						document.getElementById("c1").innerHTML = "X";
					else if (c == 3 && id == "c2")
					{
						document.getElementById("c5").innerHTML = "X";
						olose();
					}
					else if (c == 3 && id == "c5")
					{
						document.getElementById("c2").innerHTML = "X";
						olose();
					}
					c++;
				}
				if((c == 1 && (id == "c2" || id == "c3" || id == "c6")) || g == 2)
				{
					document.getElementById("c7").innerHTML = "X";
					g=2;
					if (c == 2 && id != "c8")
					{
						document.getElementById("c8").innerHTML = "X";
						olose();
					}
					else if(c ==2 && id == "c8")
						document.getElementById("c1").innerHTML = "X";
					else if (c == 3 && id == "c4")
					{
						document.getElementById("c5").innerHTML = "X";
						olose();
					}
					else if (c == 3 && id == "c5")
					{
						document.getElementById("c4").innerHTML = "X";
						olose();
					}
					c++;
				}
				if((c == 1 && id == "c1") || g == 3)
				{
					document.getElementById("c3").innerHTML = "X";
					g=3;
					if (c == 2 && id != "c6")
					{
						document.getElementById("c6").innerHTML = "X";
						olose();
					}
					else if(c ==2 && id == "c6")
						document.getElementById("c7").innerHTML = "X";
					else if (c == 3 && id == "c8")
					{
						document.getElementById("c5").innerHTML = "X";
						olose();
					}
					else if (c == 3 && id == "c5")
					{
						document.getElementById("c8").innerHTML = "X";
						olose();
					}
					c++;
				}
			}
		}
	}
	function movex()
	{
		mv = xwin();
		x++;
		if (mv != "nxwin")
		{
			document.getElementById(mv).innerHTML = "X";
			olose();
		}
		else
		{
			mv = owin();
			if (mv != "nowin")
				document.getElementById(mv).innerHTML = "X";
			else
			{
				for(i =0; i< arr.length; i++)
				{
					if(document.getElementById(arr[i]).innerHTML == "")
					{
						document.getElementById(arr[i]).innerHTML = "X";
						break;
					}
				}
			}
		}
		if(x == 5)
			yxdrw();
		
	}
	function getval(add)
	{
		return document.getElementById(add).innerHTML;
	}
	function check(a,b,c,n)
	{
		if(getval(a) == n && getval(b) == n && getval(c) == "")
		{
			mo = c;
			return true;
		}
		else if(getval(a) == n && getval(b) == "" && getval(c) == n)
		{
			mo = b;
			return true;
		}
		else if(getval(a) == "" && getval(b) == n && getval(c) == n)
		{
			mo = a;
			return true;
		}
		mo = "";
		return false;
	}
	function owin()
	{
		if(check("c1","c2","c3","O") == true || check("c4","c5","c6","O") == true || check("c7","c8","c9","O") == true || check("c1","c4","c7","O") == true ||
		   check("c2","c5","c8","O") == true || check("c3","c6","c9","O") == true || check("c1","c5","c9","O") == true || check("c3","c5","c7","O") == true)
			return mo;
		return "nowin";
	}
	function xwin()
	{
		if(check("c1","c2","c3","X") == true || check("c4","c5","c6","X") == true || check("c7","c8","c9","X") == true || check("c1","c4","c7","X") == true ||
		   check("c2","c5","c8","X") == true || check("c3","c6","c9","X") == true || check("c1","c5","c9","X") == true || check("c3","c5","c7","X") == true)
			return mo;
		return "nxwin";
	}
	function olose()
	{
		c=6;
		$("#win").show();
		$("#rstrt").show();
	}
	function yxdrw()
	{
		$("#drw").show();
		$("#rstrt").show();
	}
	$("#rstrt").click(function(){
		location.reload();
	});
	
	});
});