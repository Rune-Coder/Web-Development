$(document).ready(function()
{
	$('.result').slideUp();
	$('.my').slideUp();
	$('.cmp').slideUp();
	var arr = ["0", "1", "2"];
	var s1 = 0, s2 = 0;
	$(".mych").click(box);
	function box(event)
	{
		$('.my').slideUp();
		$('.cmp').slideUp();
		var id = event.target.id;
		var dig = id.substring(1);
		var ans = Math.floor(Math.random() * 3);
		if(dig == "0")
			$('#rck1').slideDown(1500);
		else if(dig == "1")
			$('#ppr1').slideDown(1500);
		else if(dig == "2")
			$('#scr1').slideDown(1500);
		if(arr[ans] == "0")
			$('#rck2').slideDown(1500);
		else if(arr[ans] == "1")
			$('#ppr2').slideDown(1500);
		else if(arr[ans] == "2")
			$('#scr2').slideDown(1500);
		if((dig == "0" && ans == 2)||(dig == "1" && ans == 0)||(dig == "2" && ans == 1))
			s1++;
		if((dig == "0" && ans == 1)||(dig == "1" && ans == 2)||(dig == "2" && ans == 0))
			s2++;
		document.getElementById("ysc").innerHTML = "YOU: " + s1;
		document.getElementById("msc").innerHTML = "ME: " + s2;
		win();
	}
	function win()
	{
		if(s1 == 10)
		{
			$('#show').slideUp(2000);
			$('#container').slideUp(2000);
			$('#win').slideDown(1500);
		}
		else if(s2 == 10)
		{
			$('#show').slideUp(2000);
			$('#container').slideUp(2000);
			$('#loss').slideDown(1500);
		}
	}
	$(".btn").click(function(){
		location.reload();
	});
});