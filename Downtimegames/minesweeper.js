$(document).ready(function()
{
	$("#board").hide();
	$(".result").hide();
	$("#inst").hide();
	var bomb = [], map = [], rvl = [];
	var c = 0, i, k = 0, flgcnt = 10, time = 2000;
	var timer;
	var celid;
	var img = document.createElement("img");
	var bomloc;
	$("#b2").click(function(){
		$("#menu").hide();
		$("#inst").show();
	});
	$("#bck").click(function(){
		$("#menu").show();
		$("#inst").hide();
	});
	$("#b1").click(start);
	function start()
	{
		$("#menu").hide();
		$("#board").show();
		while(c < 10)
		{
			bomloc = (Math.floor(Math.random() * 99)) + 1;
			if(prsnt(bomloc) == 0)
			{
				bomb[c] = bomloc;
				map[bomloc-1] = 10;
				c++;
			}
		}
		timer = setInterval(function()
		{
			time--;
			document.getElementById("time").innerHTML = time;
			if(time == 0)
				los();
		},1000);
		mapfil();
	}
	function prsnt(newbom)
	{
		for(i = 0; i<c ; i++)
		{
			if(newbom == bomb[i])
				return 1;
		}
		return 0;
	}
	function mapfil()
	{
		c = 0;
		for(i = 0; i < 100; i++)
		{
			c = 0;
			if(map[i] != 10)
			{
				if(i == 0)
				{
					if(map[i+1] == 10)
						c++;
					if(map[i+10] == 10)
						c++;
					if(map[i+11] == 10)
						c++;
					map[i] = c;
				}
				else if(i == 9)
				{
					if(map[i-1] == 10)
						c++;
					if(map[i+10] == 10)
						c++;
					if(map[i+9] == 10)
						c++;
					map[i] = c;
				}
				else if(i == 90)
				{
					if(map[i+1] == 10)
						c++;
					if(map[i-10] == 10)
						c++;
					if(map[i-9] == 10)
						c++;
					map[i] = c;
				}
				else if(i == 99)
				{
					if(map[i-1] == 10)
						c++;
					if(map[i-10] == 10)
						c++;
					if(map[i-11] == 10)
						c++;
					map[i] = c;
				}
				else if(i % 10 == 0)
				{
					if(map[i+1] == 10)
						c++;
					if(map[i+10] == 10)
						c++;
					if(map[i-10] == 10)
						c++;
					if(map[i+11] == 10)
						c++;
					if(map[i-9] == 10)
						c++;
					map[i] = c;
				}
				else if(i % 10 == 9)
				{
					if(map[i-1] == 10)
						c++;
					if(map[i+10] == 10)
						c++;
					if(map[i-10] == 10)
						c++;
					if(map[i+9] == 10)
						c++;
					if(map[i-11] == 10)
						c++;
					map[i] = c;
				}
				else if(i < 10)
				{
					if(map[i+1] == 10)
						c++;
					if(map[i+10] == 10)
						c++;
					if(map[i-1] == 10)
						c++;
					if(map[i+11] == 10)
						c++;
					if(map[i+9] == 10)
						c++;
					map[i] = c;
				}
				else if(i > 89)
				{
					if(map[i+1] == 10)
						c++;
					if(map[i-10] == 10)
						c++;
					if(map[i-1] == 10)
						c++;
					if(map[i-11] == 10)
						c++;
					if(map[i-9] == 10)
						c++;
					map[i] = c;
				}
				else
				{
					if(map[i+1] == 10)
						c++;
					if(map[i-1] == 10)
						c++;
					if(map[i+10] == 10)
						c++;
					if(map[i-10] == 10)
						c++;
					if(map[i+11] == 10)
						c++;
					if(map[i-11] == 10)
						c++;
					if(map[i+9] == 10)
						c++;
					if(map[i-9] == 10)
						c++;
					map[i] = c;
				}
			}
		}
	}
	$("td").mousedown(box);
	function box(event)
	{
		celid = this.id;
		celid = celid.substring(1);
		if(event.which == 1 && document.getElementById(this.id).innerHTML == "")
		{
			if(map[parseInt(celid, 10) - 1] == 10)
			{
				img.src = "minesweeper/bomb.png";
				for(i = 0; i < 10; i++)
					document.getElementById("c"+bomb[i].toString()).innerHTML = '<img class= "imgrsz" src="' + img.src + '"/>';
				$("#rstrt").addClass('reveal');
				$("#c"+celid).css({"background-color":"red"});				
				img.src = "minesweeper/dead.png";
				document.getElementById("rstrt").innerHTML = '<img class= "rstrtimgrsz" src="' + img.src + '"/>';
				setTimeout(function(){los();},1000);
			}
			else if(map[parseInt(celid, 10) - 1] > 0)
			{
				$("#c"+celid).addClass('reveal');
				rvl[k++] = parseInt(celid, 10) - 1;
				printbomocc(parseInt(celid, 10));
			}
			else if(map[parseInt(celid, 10) - 1] == 0)
				celrvl(parseInt(celid, 10) - 1);
			if(k == 90)
				win();
		}
		else if(event.which == 3 && prsntrvld(parseInt(celid, 10)-1) == 0)
		{
			img.src = "minesweeper/flag.png";
			if(document.getElementById(this.id).innerHTML == "" && flgcnt > 0)
			{
				document.getElementById(this.id).innerHTML = '<img class= "imgrsz" src="' + img.src + '"/>';
				document.getElementById("flagcnt").innerHTML = --flgcnt;
			}
			else if(document.getElementById(this.id).innerHTML != "")
			{
				document.getElementById(this.id).innerHTML = "";
				document.getElementById("flagcnt").innerHTML = ++flgcnt;
			}
		}
	}
	function celrvl(celpos)
	{
		if(map[celpos] == 0 && prsntrvld(celpos) == 0)
		{
			$("#c"+(celpos+1).toString()).addClass('reveal');
			document.getElementById("c" + (celpos+1).toString()).innerHTML = "";
			rvl[k++] = celpos;
			if(celpos == 0)
			{
				celrvl(celpos+1);
				celrvl(celpos+10);
				celrvl(celpos+11);
			}
			else if(celpos == 9)
			{
				celrvl(celpos-1);
				celrvl(celpos+10);
				celrvl(celpos+9);
			}
			else if(celpos == 90)
			{
				celrvl(celpos+1);
				celrvl(celpos-10);
				celrvl(celpos-9);
			}
			else if(celpos == 99)
			{
				celrvl(celpos-1);
				celrvl(celpos-10);
				celrvl(celpos-11);
			}
			else if(celpos % 10 == 0)
			{
				celrvl(celpos+1);
				celrvl(celpos+10);
				celrvl(celpos-10);
				celrvl(celpos+11);
				celrvl(celpos-9);
			}
			else if(celpos % 10 == 9)
			{
				celrvl(celpos-1);
				celrvl(celpos+10);
				celrvl(celpos-10);
				celrvl(celpos+9);
				celrvl(celpos-11);
			}
			else if(celpos < 10)
			{
				celrvl(celpos+1);
				celrvl(celpos+10);
				celrvl(celpos-1);
				celrvl(celpos+11);
				celrvl(celpos+9);
			}
			else if(celpos > 89)
			{
				celrvl(celpos+1);
				celrvl(celpos-10);
				celrvl(celpos-1);
				celrvl(celpos-11);
				celrvl(celpos-9);
			}
			else
			{
				celrvl(celpos+1);
				celrvl(celpos-1);
				celrvl(celpos+10);
				celrvl(celpos-10);
				celrvl(celpos+11);
				celrvl(celpos-11);
				celrvl(celpos+9);
				celrvl(celpos-9);
			}
		}
		else if(prsntrvld(celpos) == 0)
		{
			$("#c"+(celpos+1).toString()).addClass('reveal');
			printbomocc(celpos+1);
			rvl[k++] = celpos;
			return;
		}
	}
	function printbomocc(bomcnt)
	{
		if(map[bomcnt-1] != 0)
			document.getElementById("c" + bomcnt.toString()).innerHTML = map[bomcnt-1];
		if(map[bomcnt-1] == 1)
			$("#c"+bomcnt.toString()).css({"color":"blue"});
		else if(map[bomcnt-1] == 2)
			$("#c"+bomcnt.toString()).css({"color":"green"});
		else if(map[bomcnt-1] == 3)
			$("#c"+bomcnt.toString()).css({"color":"red"});
		else if(map[bomcnt-1] == 4)
			$("#c"+bomcnt.toString()).css({"color":"purple"});
		else if(map[bomcnt-1] == 5)
			$("#c"+bomcnt.toString()).css({"color":"maroon"});
		else if(map[bomcnt-1] == 6)
			$("#c"+bomcnt.toString()).css({"color":"turquoise"});
		else if(map[bomcnt-1] == 7)
			$("#c"+bomcnt.toString()).css({"color":"black"});
		else if(map[bomcnt-1] == 8)
			$("#c"+bomcnt.toString()).css({"color":"gray"});
	}
	function prsntrvld(rvld)
	{
		for(i = 0; i<k ; i++)
		{
			if(rvld == rvl[i])
				return 1;
		}
		return 0;
	}
	$("#rstrt").click(restart);
	$(".btn").click(restart);
	function restart()
	{
		location.reload();
	}
	function los()
	{
		clearInterval(timer);
		$("#board").slideUp();
		$("#lose").slideDown();
	}
	function win()
	{
		clearInterval(timer);
		$("#board").slideUp();
		$("#win").slideDown();
		document.getElementById("tmusd").innerHTML = 2000-time;
	}
});