$(document).ready(function()
{
	var arr = [];
	var a = [];
	var i;
	var c = 0, g = 0, ans = 0, chance = 0;
	var bull = 0, cow = 0;
	$('#board').hide();
	$('#keypad').hide();
	$('#htp').hide();
	$('#inst').hide();
	$('#win').hide();
	$('#loss').hide();
	$("#b1").click(function(){
		$('#board').show();
		$('#keypad').show();
		$('#menu').hide();
	});
	$("#b2").click(function(){
		$('#inst').show();
		$('#menu').hide();
	});
	$("#b3").click(function(){
		$('#htp').show();
		$('#menu').hide();
	});
	$("#b4").click(function(){
		$('#menu').show();
		$('#inst').hide();
	});
	$("#b5").click(function(){
		$('#menu').show();
		$('#htp').hide();
	});
	for(i =0; i <= 3; i++)
		arr[i] = Math.floor(Math.random() * 9);
	$(".num").click(box);
	function box(event)
	{
		var id = event.target.id;
		var dig = id.substring(1);
		a[c] = parseInt(dig);
		g++;
		c++;
		document.getElementById("g" + g.toString()).innerHTML = dig;
		if(c == 4)
		{
			c = 0;
			chance++;
			pos();
		}
	}
	function pos()
	{
		for(i = 0; i < 4; i++)
		{
			if(a[i] == arr[i])
			{
				bull++;
				a[i] = 10;
			}
		}
		for(i = 0; i < 4; i++)
		{
			for(j = 0; j < 4; j++)
			{
				if(a[i] == arr[j])
					cow++;
			}
		}
		ans++;
		document.getElementById("c" + ans.toString()).innerHTML = bull;
		ans++;
		document.getElementById("c" + ans.toString()).innerHTML = cow;
		win();
	}
	function win()
	{
		if(bull == 4 && cow == 0)
		{
			$('#keypad').hide();
			$('#board').hide();
			$('#win').show();
		}
		else if(chance == 10)
		{
			$('#keypad').hide();
			$('#board').hide();
			$('#loss').show();
		}
		bull = 0;
		cow = 0;
	}
	$(".btn").click(function(){
		location.reload();
	});
	for(i =0; i <= 3; i++)
		document.getElementById("sub").innerHTML += arr[i];
	document.getElementById("wsub").innerHTML = chance;
});