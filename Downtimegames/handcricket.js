$(document).ready(function()
{
	$("#team").hide();
	$("#tossresult").hide();
	$("#inst").hide();
	$("#show").hide();
	$("#container").hide();
	$(".toss").hide();
	$(".info").hide();
	$(".result").hide();
	var i;
	var id;
	var overs;
	var c = 0, mytm, optm, tmp = 0, flip, rn = 0, wckt = 0, ovr=0, balls=0, batin=0,bolin=0,cr=0,myscr,opscr,tar=1800,wic=0;
	var runrate=0;
	var gaps="";
	var flags = ["","INDIA","SRI LANKA","PAKISTAN","BANGLADESH","AFGHANISTAN","AUSTRALIA","SOUTH AFRICA","ENGLAND","NEW ZEALAND","WEST INDIES"];
	var teams = ["","IND","SL","PAK","BAN","AFG","AUS","SA","ENG","NZ","WI"];
	var choice = ["","one","two","three","four","paper","six"];
	var imageIndex = 1;
	$("#ins").click(function(){
		$("#intro").hide();
		$("#inst").show();
	});
	$("#bck").click(function(){
		$("#inst").hide();
		$("#intro").show();
	});
	$("#strt").click(slider);
	function slider()
	{
		$("#intro").hide();
		$("#team").show();
		$("#opteam").hide();
		$(".select-ovr").hide();
		for(i = 2; i <= 10; i++)
			$("#f"+i.toString()).hide();
	}
	$("#prv").click(previousflag);
	function previousflag()
	{
		if(imageIndex != 1)
		{
			$("#f"+imageIndex.toString()).addClass('disappear');
			setTimeout(function() { $("#f"+(imageIndex+1).toString()).hide();}, 500);
			imageIndex--;
			$("#f"+imageIndex.toString()).show();
			$("#f"+imageIndex.toString()).addClass('appear');
			setTimeout(function() { $("#f"+(imageIndex+1).toString()).removeClass('disappear');
			$("#f"+imageIndex.toString()).removeClass('appear');}, 500);
		}
	}
	$("#nxt").click(nextflag);
	function nextflag()
	{
		if(imageIndex != 10)
		{
			$("#f"+imageIndex.toString()).addClass('disappear');
			setTimeout(function() { $("#f"+(imageIndex-1).toString()).hide();}, 500);
			imageIndex++;
			$("#f"+imageIndex.toString()).show();
			$("#f"+imageIndex.toString()).addClass('appear');
			setTimeout(function() { $("#f"+(imageIndex-1).toString()).removeClass('disappear');
			$("#f"+imageIndex.toString()).removeClass('appear');}, 500);
		}
	}
	$("#nextchoice").click(prep);
	function prep()
	{
		c++;
		if(c == 1)
		{
			mytm = imageIndex;
			$("#opteam").show();
			$("#myteam").hide();
		}
		else if(c == 2)
		{
			if(mytm == imageIndex)
			{
				document.getElementById("note").innerHTML = "This team is already selected";
				$("#nextchoice").effect("shake");
				$("#nextchoice").css("background","red");
				setTimeout(function() { document.getElementById("note").innerHTML = "";}, 3000);
				c--;
			}
			else
			{
				optm = imageIndex;
				$("#opteam").hide();
				$(".carousel").hide();
				$(".select-ovr").show();
				$(".options-container").hide();
			}
		}
		else if(c == 3)
		{
			if(document.getElementById("slctd").innerHTML == "Select Overs")
			{
				document.getElementById("note").innerHTML = "Please select number of overs";
				$("#nextchoice").effect("shake");
				$("#nextchoice").css("background","red");
				setTimeout(function() { document.getElementById("note").innerHTML = "";}, 3000);
				c--;
			}
			else
			{
				overs = document.getElementById("slctd").innerHTML;
				$("#team").hide();
				for(i=0;i<flags[mytm].length;i++)
				{
					if(flags[mytm].charAt(i)!=' ')
						gaps += flags[mytm].charAt(i);
				}
				$("#myflg").css({"width": "100px","height":  "100px","border":  "none","float": "left","background":"url(country/"+gaps.toLowerCase()+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
				gaps="";
				for(i=0;i<flags[optm].length;i++)
				{
					if(flags[optm].charAt(i)!=' ')
						gaps += flags[optm].charAt(i);
				}
				$("#opflg").css({"width": "100px","height":  "100px","border":  "none","margin-left":  "50px","float": "left","background":"url(country/"+gaps.toLowerCase()+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
				$(".toss").show();
			}
		}
	}
	$(".selected").click(selectedover);
	function selectedover()
	{
		tmp++;
		if(tmp % 2 != 0)
			$(".selected i").addClass('arrowdown');
		else
			$(".selected i").removeClass('arrowdown');
		$(".options-container").slideToggle();
	}
	$(".option").click(choosover);
	function choosover(event)
	{
		tmp++;
		id = event.target.id;
		document.getElementById("slctd").innerHTML = id.substring(1);
		$(".selected i").removeClass('arrowdown');
		$(".options-container").slideUp();
	}
	$(".coin").click(toss);
	function toss(event)
	{
		$(".toss").hide();
		id = event.target.id;
		c=0;
		tmp=0;
		flip = Math.floor(Math.random() * 2);
		if(id.charAt(1) == flip.toString())
		{
			document.getElementById("choostyl").innerHTML = flags[mytm] + " won the toss";
			$("#tossresult").show();
			$("#tosslos").hide();
		}
		else
		{
			$("#tossresult").show();
			$("#tosswin").hide();
			document.getElementById("opchoostyl").innerHTML = flags[optm] + " won the toss";
			flip = Math.floor(Math.random() * 2);
			if(flip == 0)
			{
				document.getElementById("batorbol").innerHTML = flags[optm] + " choose to bowl first";
				setTimeout(function() {$("#tossresult").slideUp();
								   batfirst();}, 3000);
			}
			else
			{
				document.getElementById("batorbol").innerHTML = flags[optm] + " choose to bat first";
				setTimeout(function() {$("#tossresult").slideUp();
								   bolfirst();}, 3000);
			}
		}
	}
	$("#b0").click(batfirst);
	function batfirst()
	{
		$("#tossresult").hide();
		$("#show").show();
		$("#container").show();
		c++;
		tmp=0;
		if(c==1)
		{
			batin=mytm;
			bolin=optm;
			document.getElementById("rate").innerHTML = "RUN RATE 0";
		}
		else
		{
			batin=optm;
			bolin=mytm;
		}
		gaps="";
		for(i=0;i<flags[batin].length;i++)
		{
			if(flags[batin].charAt(i)!=' ')
				gaps += flags[batin].charAt(i);
		}
		$("#tmbat").css({"width": "48px","height":  "30px","box-shadow": "0 0 10px grey","border-width": "1px","float": "left","margin-left":"10px","margin-top":"10px","margin-bottom":"10px","background":"url(country/"+gaps.toLowerCase()+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
		$("#tm1").css({"color":"rgba(255,255,255,0.5)","font-size":"12px"});
		document.getElementById("tm1").innerHTML = teams[bolin] + " v ";
		$("#tm2").css({"font-size":"15px"});
		document.getElementById("tm2").innerHTML = teams[batin];
		document.getElementById("rnwckt").innerHTML = "0-0";
		document.getElementById("overs").innerHTML = "0.0";
		document.getElementById("bpo").innerHTML = "0.0";
		gaps="";
		for(i=0;i<flags[bolin].length;i++)
		{
			if(flags[bolin].charAt(i)!=' ')
				gaps += flags[bolin].charAt(i);
		}
		$("#tmbol").css({"width": "48px","height":  "30px","box-shadow": "0 0 10px grey","border-width": "1px","float": "left","margin-left":"5px","margin-top":"10px","margin-bottom":"10px","background":"url(country/"+gaps.toLowerCase()+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
	}
	$("#b1").click(bolfirst);
	function bolfirst()
	{
		$("#tossresult").hide();
		$("#show").show();
		$("#container").show();
		c++;
		tmp=1;
		if(c==1)
		{
			batin=optm;
			bolin=mytm;
			document.getElementById("rate").innerHTML = "RUN RATE 0";
		}
		else
		{
			batin=mytm;
			bolin=optm;
		}
		gaps="";
		for(i=0;i<flags[batin].length;i++)
		{
			if(flags[batin].charAt(i)!=' ')
				gaps += flags[batin].charAt(i);
		}
		$("#tmbat").css({"width": "48px","height":  "30px","box-shadow": "0 0 10px grey","border-width": "1px","float": "left","margin-left":"10px","margin-top":"10px","margin-bottom":"10px","background":"url(country/"+gaps.toLowerCase()+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
		$("#tm1").css({"color":"rgba(255,255,255,0.5)","font-size":"12px"});
		document.getElementById("tm1").innerHTML = teams[bolin] + " v ";
		$("#tm2").css({"font-size":"15px"});
		document.getElementById("tm2").innerHTML = teams[batin];
		document.getElementById("rnwckt").innerHTML = "0-0";
		document.getElementById("overs").innerHTML = "0.0";
		document.getElementById("bpo").innerHTML = "0.0";
		gaps="";
		for(i=0;i<flags[bolin].length;i++)
		{
			if(flags[bolin].charAt(i)!=' ')
				gaps += flags[bolin].charAt(i);
		}
		$("#tmbol").css({"width": "48px","height":  "30px","box-shadow": "0 0 10px grey","border-width": "1px","float": "left","margin-left":"5px","margin-top":"10px","margin-bottom":"10px","background":"url(country/"+gaps.toLowerCase()+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
	}
	$(".opt").click(game);
	function game(event)
	{
		id=event.target.id;
		if(batin == mytm)
			batme(id);
		else if(batin == optm)
			bolme(id);
	}
	function batme(id)
	{
		$("#stat").show();
		$("#display").show();
		cr=parseInt(id.charAt(1));
		flip = (Math.floor(Math.random() * 6))+1;
		$("#me").css({"background":""});
		$("#me").css({"background":"url("+choice[cr]+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
		$("#op").css({"background":""});
		$("#op").css({"margin-left":"50px","background":"url("+choice[flip]+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
		if(flip == cr)
		{
			wckt++;
			if(wckt == 10)
				gameover();
			cr=0;
		}
		rn = rn+cr;
		balls++;
		if(rn>tar)
			gameover();
		if(balls == 6)
		{
			ovr++;
			if(ovr.toString() == overs)
				gameover();
			balls=0;
			$(".echbol").css({"background-color":""});
		}
		else
		{
			if(cr>0)
			{
				$("#bol"+balls.toString()).css({"background-color":"#3B3178"});
				document.getElementById("bol"+balls.toString()).innerHTML = cr;
			}
			else
			{
				$("#bol"+balls.toString()).css({"background-color":"#FF0000"});
				document.getElementById("bol"+balls.toString()).innerHTML = "W";
			}
		}
		runrate=(Math.floor((rn/(ovr*6+balls)*100)))/100;
		document.getElementById("rnwckt").innerHTML = rn+"-"+wckt;
		document.getElementById("overs").innerHTML = ovr+"."+balls;
		document.getElementById("rate").innerHTML = "RUN RATE "+runrate;
		document.getElementById("bpo").innerHTML = "0."+balls;
	}
	function bolme(id)
	{
		$("#stat").show();
		$("#display").show();
		cr=parseInt(id.charAt(1));
		flip = (Math.floor(Math.random() * 6))+1;
		$("#me").css({"background":""});
		$("#me").css({"background":"url("+choice[cr]+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
		$("#op").css({"background":""});
		$("#op").css({"margin-left":"50px","background":"url("+choice[flip]+".jpg)","background-position":"center center","overflow":"hidden","background-size": "contain","background-repeat": "no-repeat"});
		if(flip == cr)
		{
			wckt++;
			if(wckt == 10)
				gameover();
			flip=0;
		}
		rn = rn+flip;
		balls++;
		if(rn>tar)
			gameover();
		if(balls == 6)
		{
			ovr++;
			if(ovr.toString() == overs)
				gameover();
			balls=0;
			$(".echbol").css({"background-color":""});
		}
		else
		{
			if(flip>0)
			{
				$("#bol"+balls.toString()).css({"background-color":"#3B3178"});
				document.getElementById("bol"+balls.toString()).innerHTML = flip;
			}
			else
			{
				$("#bol"+balls.toString()).css({"background-color":"#FF0000"});
				document.getElementById("bol"+balls.toString()).innerHTML = "W";
			}
		}
		runrate=(Math.floor((rn/(ovr*6+balls)*100)))/100;
		document.getElementById("rnwckt").innerHTML = rn+"-"+wckt;
		document.getElementById("overs").innerHTML = ovr+"."+balls;
		document.getElementById("rate").innerHTML = "RUN RATE "+runrate;
		document.getElementById("bpo").innerHTML = "0."+balls;
	}
	function gameover()
	{
		$("#stat").hide();
		$("#display").hide();
		if(batin == mytm)
			myscr=rn;
		else if(batin == optm)
			opscr=rn;
		tar=rn;
		if(wckt>wic)
			wic=wckt;
		if(c==1)
		{
			tarstats();
			setTimeout(function() {
			$("#container").slideDown();
			$(".info").slideUp();
			rn=0;
			ovr=0;
			wckt=0;
			balls=0;
			if(tmp==0 && c==1)
				batfirst();
			else if(tmp==1 && c==1)
				bolfirst();
			}, 5000);
		}
		else if(c==2)
			gameresult();
	}
	function tarstats()
	{
		$(".info").slideDown();
		$("#container").slideUp();
		document.getElementById("cntryscr").innerHTML = teams[batin]+" "+rn+"-"+wckt;
		document.getElementById("ttlovrs").innerHTML = "OVERS "+ovr;
		document.getElementById("rrpo").innerHTML = "REQUIRED RUN RATE "+runrate;
		document.getElementById("tar").innerHTML = teams[bolin]+" NEEDS "+(tar+1)+" FROM "+ovr+" OVERS";
	}
	function gameresult()
	{
		$("#show").hide();
		$("#container").hide();
		$("#summary").hide();
		if(myscr>opscr)
			win();
		else if(myscr<opscr)
			los();
		else
			$("#tie").slideDown();
	}
	function win()
	{
		$("#win").slideDown();
		document.getElementById("wn").innerHTML = teams[mytm]+" WIN BY "+(10-wic)+" WICKETS ";
	}
	function los()
	{
		$("#loss").slideDown();
		document.getElementById("ls").innerHTML = teams[optm]+" WIN BY "+(10-wic)+" WICKETS ";
	}
	$(".btn").click(function(){
		location.reload();
	});
});