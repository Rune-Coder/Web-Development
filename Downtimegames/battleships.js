$(document).ready(function()
{
	$(".detail").hide();
	var img;
	var cr = 0, su = 0, ca = 0, ba = 0, de = 0;
	var sh = "" , dir = "";
	var poscr = [], possu = [], posca = [], posba = [], posde = [];
	var tar = [0], shots = [], myships = [], hits = [], poshits = [];
	var flag = 0, tmp, ans, drc, s = 0, hturn, pos, shtscnt = 0, snk = 1, c = 0, nebr = 0, org, prvhits, tmp1, tmp2;
	var i, j;
	$("#b1").click(function(){
		$("#menu").hide();
		$(".detail").show();
		$("#inst").hide();
		$("#htp").hide();
		$("#comp").hide();
		$("#sink").hide();
		$(".result").hide();
	});
	$("#b2").click(function(){
		$("#menu").hide();
		$("#inst").show();
	});
	$("#b3").click(function(){
		$("#menu").hide();
		$("#htp").show();
	});
	$("#b4").click(function(){
		$("#inst").hide();
		$("#menu").show();
	});
	$("#b5").click(function(){
		$("#htp").hide();
		$("#menu").show();
	});
	$("#cr").click(function(){
		sh = "cr";
		img = document.createElement("img");
		img.src = "cruiser.jpg";
	});
	$("#su").click(function(){
		sh = "su";
		img = document.createElement("img");
		img.src = "submarine.jpg";
	});
	$("#ca").click(function(){
		sh = "ca";
		img = document.createElement("img");
		img.src = "carrier.jpg";
	});
	$("#ba").click(function(){
		sh = "ba";
		img = document.createElement("img");
		img.src = "battleship.jpg";
	});
	$("#de").click(function(){
		sh = "de";
		img = document.createElement("img");
		img.src = "destroyer.jpg";
	});
	$("#cell").click(box);
	function box(event)
	{
		var id = event.target.id;
		if(document.getElementById(id).innerHTML == "")
		{
			if(sh == "cr")
				cr++;
			else if(sh == "su")
				su++;
			else if(sh == "ca")
				ca++;
			else if(sh == "ba")
				ba++;
			else if(sh == "de")
				de++;
			if(sh == "ca" && ca <= 5)
			{
				document.getElementById(id).innerHTML = '<img src="' + img.src + '"/>';
				posca.push(parseInt(id.substring(1)));
			}
			else if(sh == "cr" && cr <= 3)
			{
				document.getElementById(id).innerHTML = '<img src="' + img.src + '"/>';
				poscr.push(parseInt(id.substring(1)));
			}
			else if(sh == "su" && su <= 3)
			{
				document.getElementById(id).innerHTML = '<img src="' + img.src + '"/>';
				possu.push(parseInt(id.substring(1)));
			}
			else if(sh == "ba" && ba <= 4)
			{
				document.getElementById(id).innerHTML = '<img src="' + img.src + '"/>';
				posba.push(parseInt(id.substring(1)));
			}
			else if(sh == "de" && de <= 2)
			{
				document.getElementById(id).innerHTML = '<img src="' + img.src + '"/>';
				posde.push(parseInt(id.substring(1)));
			}
		}
	}
	$("#rd").click(ready);
	function ready()
	{
		checkships();
		if(flag == 1)
		{
			document.getElementById("note").innerHTML = "Please place your ships correctly";
			$("#rd").effect("shake");
			$("#rd").css("background","red");
			setTimeout(function() { document.getElementById("note").innerHTML = "";}, 3000);
		}
		else
		{
			for(i = 0; i < posca.length; i++)
				myships[c++] = posca[i];
			for(i = 0; i < posba.length; i++)
				myships[c++] = posba[i];
			for(i = 0; i < possu.length; i++)
				myships[c++] = possu[i];
			for(i = 0; i < poscr.length; i++)
				myships[c++] = poscr[i];
			for(i = 0; i < posde.length; i++)
				myships[c++] = posde[i];
			c = 0;
			place(5);
			place(4);
			place(3);
			place(3);
			place(2);
			$("#ships").hide();
			$("#board").hide();
			$("#ready").hide();
			$("#comp").slideDown();
		}
		flag = 0;
	}
	function checkships()
	{
		if(posde.length == 2 && poscr.length == 3 && posba.length == 4 && posca.length == 5 && possu.length == 3)
		{
			sort();
			dir = "";
			for(i = 0; i < posca.length-1; i++)
			{
				if(i == 0)
				{
					if(posca[i+1]-posca[i] == 1)
						dir = "hor";
					else if(posca[i+1]-posca[i] == 10)
						dir = "ver";
				}
				if(dir == "hor")
				{
					if(posca[i+1]-posca[i] != 1)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "ver")
				{
					if(posca[i+1]-posca[i] != 10)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "")
				{
					flag = 1;
					break;
				}
			}
			dir = "";
			for(i = 0; i < posba.length-1; i++)
			{
				if(i == 0)
				{
					if(posba[i+1]-posba[i] == 1)
						dir = "hor";
					else if(posba[i+1]-posba[i] == 10)
						dir = "ver";
				}
				if(dir == "hor")
				{
					if(posba[i+1]-posba[i] != 1)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "ver")
				{
					if(posba[i+1]-posba[i] != 10)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "")
				{
					flag = 1;
					break;
				}
			}
			dir = "";
			for(i = 0; i < possu.length-1; i++)
			{
				if(i == 0)
				{
					if(possu[i+1]-possu[i] == 1)
						dir = "hor";
					else if(possu[i+1]-possu[i] == 10)
						dir = "ver";
				}
				if(dir == "hor")
				{
					if(possu[i+1]-possu[i] != 1)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "ver")
				{
					if(possu[i+1]-possu[i] != 10)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "")
				{
					flag = 1;
					break;
				}
			}
			dir = "";
			for(i = 0; i < poscr.length-1; i++)
			{
				if(i == 0)
				{
					if(poscr[i+1]-poscr[i] == 1)
						dir = "hor";
					else if(poscr[i+1]-poscr[i] == 10)
						dir = "ver";
				}
				if(dir == "hor")
				{
					if(poscr[i+1]-poscr[i] != 1)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "ver")
				{
					if(poscr[i+1]-poscr[i] != 10)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "")
				{
					flag = 1;
					break;
				}
			}
			dir = "";
			for(i = 0; i < posde.length-1; i++)
			{
				if(i == 0)
				{
					if(posde[i+1]-posde[i] == 1)
						dir = "hor";
					else if(posde[i+1]-posde[i] == 10)
						dir = "ver";
				}
				if(dir == "hor")
				{
					if(posde[i+1]-posde[i] != 1)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "ver")
				{
					if(posde[i+1]-posde[i] != 10)
					{
						flag = 1;
						break;
					}
				}
				else if(dir == "")
				{
					flag = 1;
					break;
				}
			}
		}
		else
			flag = 1;
	}
	function sort()
	{
		for(i = 0; i < posde.length-1; i++)
		{
			for(j = 0; j < posde.length-1-i; j++)
			{
				if(posde[j] > posde[j+1])
				{
					tmp = posde[j];
					posde[j] = posde[j+1];
					posde[j+1] = tmp;
				}
			}
		}
		for(i = 0; i < poscr.length-1; i++)
		{
			for(j = 0; j < poscr.length-1-i; j++)
			{
				if(poscr[j] > poscr[j+1])
				{
					tmp = poscr[j];
					poscr[j] = poscr[j+1];
					poscr[j+1] = tmp;
				}
			}
		}
		for(i = 0; i < posba.length-1; i++)
		{
			for(j = 0; j < posba.length-1-i; j++)
			{
				if(posba[j] > posba[j+1])
				{
					tmp = posba[j];
					posba[j] = posba[j+1];
					posba[j+1] = tmp;
				}
			}
		}
		for(i = 0; i < posca.length-1; i++)
		{
			for(j = 0; j < posca.length-1-i; j++)
			{
				if(posca[j] > posca[j+1])
				{
					tmp = posca[j];
					posca[j] = posca[j+1];
					posca[j+1] = tmp;
				}
			}
		}
		for(i = 0; i < possu.length-1; i++)
		{
			for(j = 0; j < possu.length-1-i; j++)
			{
				if(possu[j] > possu[j+1])
				{
					tmp = possu[j];
					possu[j] = possu[j+1];
					possu[j+1] = tmp;
				}
			}
		}
	}
	$("#rs").click(reset);
	function reset()
	{
		for(i = 1; i <= 100; i++)
		{
			document.getElementById("c"+i.toString()).innerHTML = "";
		}
		cr = 0; su = 0; ca = 0; ba = 0; de = 0;
		posde.splice(0, posde.length);
		posba.splice(0, posba.length);
		posca.splice(0, posca.length);
		poscr.splice(0, poscr.length);
		possu.splice(0, possu.length);
		flag = 0;
	}
	function place(l)
	{
		do
		{
			flag = 0;
			ans = (Math.floor(Math.random() * 100)) + 1;
			drc = (Math.floor(Math.random() * 2));
			if(drc == 0)
			{
				for(i = 0; i < l; i++)
				{
					if(exist((ans+i)) == 1)
					{
						flag = 1;
						break;
					}
				}
				if(((ans % 10) > (11-l)) || ((ans % 10) == 0))
					flag = 1;
				if(flag == 0)
				{
					for(i = 0; i < l; i++)
						tar[s++]=ans++;
				}
				else
				{
					flag = 0;
					for(i = 0; i < l; i++)
					{
						if(exist((ans-i)) == 1)
						{
							flag = 1;
							break;
						}
					}
					if((ans % 10) < l)
						flag = 1;
					if(flag == 0)
					{
						for(i = 0; i < l; i++)
							tar[s++]=ans--;
					}
				}
			}
			else
			{
				for(i = 0; i < l*10; i+=10)
				{
					if(exist((ans+i)) == 1)
					{
						flag = 1;
						break;
					}
				}
				if((ans / 10) > (10-l))
					flag = 1;
				if(((ans / 10) == (11-l)) && ((ans % 10) == 0))
					flag = 0;
				if(flag == 0)
				{
					for(i = 0; i < l; i++)
					{
						tar[s++]=ans;
						ans += 10;
					}
				}
				else
				{
					flag = 0;
					for(i = 0; i < l*10; i+=10)
					{
						if(exist((ans-i)) == 1)
						{
							flag = 1;
							break;
						}
					}
					if((ans / 10) < (l-1))
						flag = 1;
					if(((ans / 10) == (l-1)) && ((ans % 10) == 0))
						flag = 1;
					if(flag == 0)
					{
						for(i = 0; i < l; i++)
						{
							tar[s++]=ans;
							ans -= 10;
						}
					}
				}
			}
		} while(flag != 0);
	}
	function exist(a)
	{
		for(j = 0; j < tar.length; j++)
		{
			if(tar[j] == a)
				return 1;
		}
		return 0;
	}
	$("#tar").click(targ);
	function targ(newevent)
	{
		tmp = 0;
		flag=0;
		var tarid = newevent.target.id;
		if(document.getElementById(tarid).innerHTML == "")
		{
			img = document.createElement("img");
			hturn = parseInt(tarid.substring(1));
			for(i = 0; i < tar.length; i++)
			{
				if(tar[i] == hturn)
				{
					flag = 1;
					tar[i] = 0;
					pos = i;
					break;
				}
			}
			if(flag == 0)
			{
				img.src = "miss.jpg";
				document.getElementById(tarid).innerHTML = '<img src="' + img.src + '"/>';
			}
			else
			{
				img.src = "hit.jpg";
				document.getElementById(tarid).innerHTML = '<img src="' + img.src + '"/>';
				if(pos >= 0 && pos < 5)
					tmp = sunk(0,5);
				else if(pos >= 5 && pos < 9)
					tmp = sunk(5,9);
				else if(pos >= 9 && pos < 12)
					tmp = sunk(9,12);
				else if(pos >= 12 && pos < 15)
					tmp = sunk(12,15);
				else
					tmp = sunk(15,17);
			}
			if(mywin() == 0)
			{
				if(tmp == 0)
				{
					$("#comp").slideUp();
					$("#board").slideDown();
					setTimeout(function() { $("#board").slideUp();}, 3000);
					setTimeout(function() { $("#comp").slideDown();}, 3000);
					setTimeout(function() { game();}, 2000);
				}
				else
				{
					$("#comp").slideUp();
					$("#sink").slideDown();
					setTimeout(function() { $("#sink").slideUp();}, 3000);
					setTimeout(function() { $("#comp").slideDown();}, 3000);
					setTimeout(function() {
					$("#comp").slideUp();
					$("#board").slideDown();
					setTimeout(function() { $("#board").slideUp();}, 3000);
					setTimeout(function() { $("#comp").slideDown();}, 3000);
					setTimeout(function() { game();}, 2000);}, 3500);
				}
			}
		}
	}
	function game()
	{
		if(snk == 1)
		{
			do
			{
				ans = (Math.floor(Math.random() * 100)) + 1;
			}while((checkshots(ans) == 1) || ((Math.floor((ans/10)) % 2 == 0) && (ans % 2 != 0)) || ((Math.floor((ans/10)) % 2 != 0) && (ans % 2 == 0)));
			if(residue() != 0)
				ans = residue();
			nebr = 0;
			org = ans;
		}
		else
		{
			do
			{
				if(((ans % 10) == 0) && (nebr == 0))
				{
					nebr++;
					ans = org;
				}
				if(((ans % 10) == 1) && (nebr == 1))
				{
					nebr++;
					ans = org;
				}
				if(nebr == 0)
					ans++;
				else if(nebr == 1)
					ans--;
				else if(nebr == 2)
					ans = ans-10;
				else
					ans = ans+10;
				if(hit(ans) == 2 || ans < 1 || ans > 100)
				{
					nebr++;
					ans = org;
				}
			}while(hit(ans) == 2|| hit(ans) == 1 || ans < 1 || ans > 100);
		}
		shots[shtscnt++] = ans;
		if(document.getElementById("c"+ans.toString()).innerHTML != "")
		{
			$("#c"+ans.toString()).css({"background-color":"red"});
			for(i = 0; i < myships.length; i++)
			{
				if(myships[i] == ans)
				{
					hits[c] = myships[i];
					poshits[c++] = i;
					myships[i] = 0;
					pos = i;
					break;
				}
			}
			if(pos >= 0 && pos < 5)
				snk = mysink(0,5);
			else if(pos >= 5 && pos < 9)
				snk = mysink(5,9);
			else if(pos >= 9 && pos < 12)
				snk = mysink(9,12);
			else if(pos >= 12 && pos < 15)
				snk = mysink(12,15);
			else
				snk = mysink(15,17);
			if(snk == 1)
			{
				setTimeout(function() { $("#comp").slideUp();}, 1000);
				setTimeout(function() { $("#sink").slideDown();}, 1000);
				setTimeout(function() { $("#sink").slideUp();}, 4000);
				setTimeout(function() { $("#comp").slideDown();}, 4000);
			}
			opwin();
			
		}
		else
		{
			img = document.createElement("img");
			img.src = "miss.jpg";
			document.getElementById("c"+ans.toString()).innerHTML = '<img src="' + img.src + '"/>';
			nebr++;
			ans = org;
		}
	}
	function sunk(st, en)
	{
		var sum = 0;
		for(i = st; i < en; i++)
			sum = sum + tar[i];
		if(sum == 0)
			return 1;
		return 0;
	}
	function checkshots(n)
	{
		for(i = 0; i < shots.length; i++)
		{
			if(shots[i] == n)
				return 1;
		}
		return 0;
	}
	function hit(n)
	{
		for(i = 0; i < shots.length; i++)
		{
			if(shots[i] == n)
			{
				for(j = 0; j < hits.length; j++)
				{
					if(hits[j] == n)
					{
						if(poshits[j] >= 0 && poshits[j] < 5)
							prvhits = mysink(0,5);
						else if(poshits[j] >= 5 && poshits[j] < 9)
							prvhits = mysink(5,9);
						else if(poshits[j] >= 9 && poshits[j] < 12)
							prvhits = mysink(9,12);
						else if(poshits[j] >= 12 && poshits[j] < 15)
							prvhits = mysink(12,15);
						else
							prvhits = mysink(15,17);
						if(prvhits == 0)
							return 1;
					}
				}
				return 2;
			}
		}
		return 0;
	}
	function residue()
	{
		tmp = 0;
		var sum = 0;
		for(i = 0; i < poshits.length; i++)
		{
			if(poshits[i] >= 0 && poshits[i] < 5)
			{
				for(j = 0; j < 5; j++)
					sum = sum + myships[j];
				tmp1 = 0;
				tmp2 = 5;
			}
			else if(poshits[i] >= 5 && poshits[i] < 9)
			{
				for(j = 5; j < 9; j++)
					sum = sum + myships[j];
				tmp1 = 5;
				tmp2 = 9;
			}
			else if(poshits[i] >= 9 && poshits[i] < 12)
			{
				for(j = 9; j < 12; j++)
					sum = sum + myships[j];
				tmp1 = 9;
				tmp2 = 12;
			}
			else if(poshits[i] >= 12 && poshits[i] < 15)
			{
				for(j = 12; j < 15; j++)
					sum = sum + myships[j];
				tmp1 = 12;
				tmp2 = 15;
			}
			else
			{
				for(j = 15; j < 17; j++)
					sum = sum + myships[j];
				tmp1 = 15;
				tmp2 = 17;
			}
			if(sum != 0)
			{
				for(j = tmp1; j < tmp2; j++)
				{
					if(myships[j] != 0)
					{
						tmp = myships[j];
						break;
					}
				}
				break;
			}
		}
		return tmp;
	}
	function mysink(st, en)
	{
		var sum = 0;
		for(i = st; i < en; i++)
			sum = sum + myships[i];
		if(sum == 0)
			return 1;
		return 0;
	}
	function mywin()
	{
		var sum = 0;
		for(i = 0; i < tar.length; i++)
			sum = sum + tar[i];
		if(sum == 0)
		{
			$("#comp").slideUp();
			$("#win").slideDown();
			return 1;
		}
		return 0;
	}
	function opwin()
	{
		var sum = 0;
		for(i = 0; i < myships.length; i++)
			sum = sum + myships[i];
		if(sum == 0)
		{
			setTimeout(function() { $("#comp").slideUp();}, 1000);
			setTimeout(function() { $("#lose").slideDown();}, 1000);
			return 1;
		}
		return 0;
	}
	$("#win").click(function(){
		location.reload();
	});
	$("#lose").click(function(){
		location.reload();
	});
});