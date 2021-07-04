
var light = document.querySelector(".light");

var waterdrop = document.querySelector(".waterdrop");

var added = document.querySelector(".added");

var menu = document.querySelector(".menu");




var interval1;

var interval2;

var goingLeft = false;

var goingRight = false;

var leftValue;

var moveTop2 = 550;

var adding = 0;

var pushing = [];

var random2;
var random;

//var topValue;

var drop = 0;

//var holePosition;

//var holeWidth;

var groundPosition;

var score = 0;

var start = 0;


function moveLeft() {
	 leftValue = parseInt(window.getComputedStyle(waterdrop).getPropertyValue("left"));
	if(leftValue > 5){waterdrop.style.left = leftValue - 2 + "px";}
}


function moveRight() {
	 leftValue = parseInt(window.getComputedStyle(waterdrop).getPropertyValue("left"));
	if(leftValue < 980) {waterdrop.style.left = leftValue + 2 + "px";}
}

document.addEventListener("keydown", (event) => {
	if(event.key === "ArrowLeft" && !goingLeft ) {

		goingLeft = true;

		interval1 = setInterval(moveLeft,1);
	}

	if(event.key === "ArrowRight" && !goingRight) {

		goingRight = true;

		interval2 = setInterval(moveRight,1)
	}
});

document.addEventListener("keyup",(event)=>{
	if(event.key === "ArrowLeft" || leftValue == 5){clearInterval(interval1); goingLeft = false;}
	
	if(event.key === "ArrowRight" || leftValue == 1280){clearInterval(interval2); goingRight = false;}

});



	function createGround(){
		var moveTop = 550;
		random = Math.floor(Math.random() * 860);
		random2 = Math.floor(Math.random() * 100) + 40;
		var ground = document.createElement("div");
		var hole = document.createElement("div");
		ground.setAttribute("class","ground");
		hole.setAttribute("class","hole");
		light.appendChild(ground);
		light.appendChild(hole);
		hole.style.width = random2 + "px";
		hole.style.left = random + "px";
		ground.style.top = moveTop + "px";
		hole.style.top = moveTop + "px";
		adding++;
		
		pushing.push(adding);
		
		
		 	var value1 = document.getElementsByClassName("ground");
		 	var value2 = document.getElementsByClassName("hole");
		 	var topValue1;
		 	var topValue2;
		 	var topValue3;
		 	var topValue4;
		 	var topValue5;
			var holeposition;
			var holeposition2;
			var holeposition3;
			var holeposition4;
			var holeposition5;
			var holeWidth;
			var holeWidth2;
			var holeWidth3;
			var holeWidth4;
			var holeWidth5;

		function moveGround () {
				moveTop -= 1;
				ground.style.top = moveTop + "px";
				hole.style.top = moveTop + "px";
				var goDown = 0;
				 
				if(moveTop === -40){
					
					oneClass = document.getElementsByClassName("ground");
					twoClass = document.getElementsByClassName("hole");
					oneClass[0].remove();
					twoClass[0].remove();
					adding--;
					score++;
				   
				    }
				    var waterdropTop = parseInt(window.getComputedStyle(waterdrop).getPropertyValue("top"));
				   var waterdropLeft = parseInt(window.getComputedStyle(waterdrop).getPropertyValue("left"));

				    if(adding >= 1){
				   topValue1 = parseInt(window.getComputedStyle(value1[0]).getPropertyValue("top"));
				   holePosition = parseInt(window.getComputedStyle(value2[0]).getPropertyValue("left"));
				   holeWidth = parseInt(window.getComputedStyle(value2[0]).getPropertyValue("width"));
				}
				   if(adding >=2){
				   	topValue2 = parseInt(window.getComputedStyle(value1[1]).getPropertyValue("top"));
				   	holePosition2 = parseInt(window.getComputedStyle(value2[1]).getPropertyValue("left"));
				   	holeWidth2 = parseInt(window.getComputedStyle(value2[1]).getPropertyValue("width"));
				   }
				    if(adding >=3){
				   	topValue3 = parseInt(window.getComputedStyle(value1[2]).getPropertyValue("top"));
				   	holePosition3 = parseInt(window.getComputedStyle(value2[2]).getPropertyValue("left"));
				   	holeWidth3 = parseInt(window.getComputedStyle(value2[2]).getPropertyValue("width"));
				   }
				    if(adding >=4){
				   	topValue4 = parseInt(window.getComputedStyle(value1[3]).getPropertyValue("top"));
				   	holePosition4 = parseInt(window.getComputedStyle(value2[3]).getPropertyValue("left"));
				   	holeWidth4 = parseInt(window.getComputedStyle(value2[3]).getPropertyValue("width"));
				   }
				    if(adding >=5){
				   	topValue5 = parseInt(window.getComputedStyle(value1[4]).getPropertyValue("top"));
				   	holePosition5 = parseInt(window.getComputedStyle(value2[4]).getPropertyValue("left"));
				   	holeWidth5 = parseInt(window.getComputedStyle(value2[4]).getPropertyValue("width"));
				   }
				   


				   

				 if(waterdropTop < topValue1 && waterdropTop > topValue1-40
				 	|| waterdropTop < topValue2 && waterdropTop > topValue2-40
				 	|| waterdropTop < topValue3 && waterdropTop > topValue3-40
				 	|| waterdropTop < topValue4 && waterdropTop > topValue4-40
				 	|| waterdropTop < topValue5 && waterdropTop > topValue5-40){
				  	goDown=1;
				  }
				 if(waterdropTop < topValue1 && waterdropTop > topValue1-40
				 	&& waterdropLeft > holePosition && waterdropLeft < holePosition + holeWidth
				 	|| waterdropTop < topValue2 && waterdropTop > topValue2-40
				 	&& waterdropLeft > holePosition2 && waterdropLeft < holePosition2 + holeWidth2
				 	|| waterdropTop < topValue3 && waterdropTop > topValue3-40
				 	&& waterdropLeft > holePosition3 && waterdropLeft < holeWidth3 + holePosition3
				 	|| waterdropTop < topValue4 && waterdropTop > topValue4-40
				 	&& waterdropLeft > holePosition4 && waterdropLeft < holeWidth4 + holePosition4
				 	|| waterdropTop < topValue5 && waterdropTop > topValue5-40
				 	&& waterdropLeft > holePosition5 && waterdropLeft < holeWidth5 + holePosition5){
				 	goDown = 0;
				 }

				 if( waterdropTop < 550 && waterdropTop > 525){
				 	goDown =1;
				 }

				 
				  if(goDown==0){
				  	waterdrop.style.top = waterdropTop + 1 + "px";

				 }
				  if(goDown==1){
				  	waterdropTop-=1;
				  	waterdrop.style.top = waterdropTop + "px";
				  }
				  if(waterdropTop < 0){
			
			start = 1;
			
		}
				}
	var random3 =  Math.floor(Math.random() * 1700) + 1200;
	var timer = setTimeout(createGround,random3);
	var interval = setInterval(moveGround,10);
	if(start == 1){
		clearTimeout(timer);
		clearInterval(interval);
		light.style.display = "none";
		added.style.display = "block";
		menu.style.display = "block";
		setTimeout(alert(score),100);

	}
		}
		function startGame(){
			start = 0;
			menu.style.display = "none";
			added.style.display = "none";
			light.style.display = "block";
			waterdrop.style.top = 100 + "px";
			createGround();

		}
		createGround();






	/*
	moveTop += random3;
		var holeNew = hole.getElementById("hole"+(increment++));
		var groundNew = ground.getElementById("ground"+(increment++));
		groundNew.style.top = moveTop + "px";
		holeNew.style.top = moveTop + "px";*/
	/*ground.setAttribute("id","ground"+ increment);
	hole.setAttribute("id","hole" + increment);*/


	