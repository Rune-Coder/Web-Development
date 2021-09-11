$(document).ready(function()
{
	var arr = ["1", "2", "3","4", "5", "6","7", "8",  "9", "10", "11", "12","13", "14", "15", ""];
	var a = ["1", "2", "3","4", "5", "6","7", "8",  "9", "10", "11", "12","13", "14", "15", "16"];
	$('.result').hide();
	var i, j;
	var tmp;
	var pos;
	var c = 0, p1, p2;
	var a1int, a2int;
	for(i =arr.length - 1; i >= 0; i--)
	{
		j = Math.floor(Math.random() * i);
		tmp = arr[j];
		arr[j] = arr[i];
		arr[i] = tmp;
	}
	for(i = 0; i< arr.length; i++)
	{
		if(arr[i] == "")
		{
			pos = i+1;
			break;
		}
	}
	var row = Math.ceil(pos/4.0);
	for(i = 0; i< arr.length-1; i++)
	{
		if(arr[i] != "")
		{
			a1int = parseInt(arr[i]);
			if(arr[i+1] == "" && i != arr.length-2)
				a2int = parseInt(arr[i+2]);
			else if(arr[i+1] != "")
				a2int = parseInt(arr[i+1]);
			else
				a2int = 16;
			if(a1int > a2int)
			{
				c++;
				p1 = i;
				p2 = i+1;
			}
		}
	}
	if((5-row)%2 == 0)
	{
		if(c%2 ==0)
		{
			tmp = arr[p1];
			arr[p1] = arr[p2];
			arr[p2] = tmp;
		}
	}
	else
	{
		if(c%2 !=0)
		{
			tmp = arr[p1];
			arr[p1] = arr[p2];
			arr[p2] = tmp;
		}
	}
	for(i = 0; i< arr.length; i++)
	{
		document.getElementById("c"+a[i]).innerHTML = arr[i];
	}
	bckgrnd();
	$("td").click(box);
	function box(event)
	{
		var id = event.target.id;
		var dig = id.substring(1);
		var index = parseInt(dig) - 1;
		var row1 = Math.ceil((index + 1)/4.0);
		var row2 = Math.ceil((index + 2)/4.0);
		row = Math.ceil(index/4.0);
		if(arr[index+1] == "" && row1 == row2)
		{
			tmp = arr[index+1];
			arr[index+1] = arr[index];
			arr[index] = tmp;
			document.getElementById(id).innerHTML = "";
			document.getElementById("c"+a[index+1]).innerHTML = arr[index+1];
		}
		else if(arr[index-1] == "" && row1 == row)
		{
			tmp = arr[index-1];
			arr[index-1] = arr[index];
			arr[index] = tmp;
			document.getElementById(id).innerHTML = "";
			document.getElementById("c"+a[index-1]).innerHTML = arr[index-1];
		}
		else if(arr[index+4] == "")
		{
			tmp = arr[index+4];
			arr[index+4] = arr[index];
			arr[index] = tmp;
			document.getElementById(id).innerHTML = "";
			document.getElementById("c"+a[index+4]).innerHTML = arr[index+4];
		}
		else if(arr[index-4] == "")
		{
			tmp = arr[index-4];
			arr[index-4] = arr[index];
			arr[index] = tmp;
			document.getElementById(id).innerHTML = "";
			document.getElementById("c"+a[index-4]).innerHTML = arr[index-4];
		}
		bckgrnd();
		win();
	}
	function bckgrnd()
	{
		for(i = 0; i < arr.length; i++)
		{
			if(arr[i] != "")
				$("#c"+a[i]).css({'background': 'linear-gradient(110deg, darkslategray 40%, rgba(0,0,0,0) 30%),radial-gradient(farthest-corner at 0% 0%, slategray 70%, dimgray 70%)'});
			else
				$("#c"+a[i]).css('background', '');
		}
	}
	function win()
	{
		var flag = 0;
		for(i = 0; i < arr.length-1; i++)
		{
			if(arr[i] != a[i])
			{
				flag =1;
				break;
			}
		}
		if(flag == 0)
			$('.result').show();
	}
	$(".btn").click(function(){
		location.reload();
	});
});