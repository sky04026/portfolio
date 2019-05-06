window.onload = function(){
	if(getIEVersion()){
	$('html').scrollView();
	}
	else{
		$('html').css("overflow", "hidden")
	}
}

// when the page is loaded run the following
$(document).ready(function(){
	$('#smile').on('keydown', function(e) {
		if(aboutOpen == true){return;}
		var str="#a" + (index);
		var str2="#a" + (index+1);
		var str3="#a" + (index+2);
		var code = e.key || e.which;
		code = code.toLowerCase();
		console.log(code);
		if(code<0){index=0;}
		if(code == "backspace"){
			if(index==0){return;}
			index--;
			$(str).attr('src', "glyphs/empty.jpg")
			$(str2).attr('src', "glyphs/empty.jpg")
		}
		else if(code == " " || code =="spacebar"){
			index++
			$(str2).attr('src', "glyphs/empty.jpg")
		}
		else if(code == "."){
			index++
			var id = "glyphs/period.jpg?" + Math.random();
			$(str2).attr('src', id)
		}
		else if(index == 98){}
		else if(code == ";"){
			index++
			var id = "glyphs/;.jpg?" + Math.random();
			$(str2).attr('src', id)
		}
		else if(code == "\""){
			index++
			var id = "glyphs/_.jpg?" + Math.random();
			$(str2).attr('src', id)
		}
		else{
			for(x=0; x<lib.length; x++){
			if(code == lib[x]){
			index++;
			var id  = "glyphs/" + code + ".jpg?" + Math.random();
			// $(str).attr('src', "tester-gif.gif?" + Math.random());
			$(str2).attr('src', id);
			}
		}
		}
		document.getElementById("smile").focus();
	});

	var idleInterval = setInterval(timerIncrement, 800);

	$('#infoTitle').click(function(){
		if(aboutOpen == false){
		aboutOpen = true
		$("#aboutPage").css("z-index", "4");
		$("#aboutPage").animate({opacity: .8}, 150);
		$("#container").animate({opacity: .5}, 150);
		$("#aboutText").css("opacity", "1");
		$("#aboutTitle").css("opacity", "1");
		}
	})

	$('#printTitle').click(function(){
		printContent('box');
	})

	$('#back').click(function(){
		if(aboutOpen==true && cameraOpen==false){
			aboutOpen = false;
			$("#aboutText").css("opacity", "1")
			$("#aboutTitle").css("opacity", "1")
			$("#aboutPage").animate({opacity: 0}, 150);
			$("#container").animate({opacity: 1}, 150);
		}
			document.getElementById("smile").focus();
		})
})

var index = 0;

var aboutOpen = false;
var cameraOpen = false;

var idleTime=0

var lib = [
				"a","b","c","d","e","f","g","h","i","j",
				"k","l","m","n","o","p","q","r","s","t",
				"u","v","w","x","y","z",",","!","&","(",
				")","-",";","~","\""
			  ]

// measuring idle time
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2) { //1.6 seconds
        var str2 = "#a" + (index+1);
        $(str2).attr('src', "glyphs/typing.gif");
        ;
    }
}

// print contents of div
function printContent(el){
	var restorepage = document.body.innerHTML;
	var printcontent = document.getElementById(el).innerHTML;
	document.body.innerHTML = printcontent;
	window.print();
	document.body.innerHTML = restorepage;
	location.reload();
}

function getIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0){
  	console.log("dear god. Who uses internet explorer?")
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));}

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return 0; //It is not IE
}
