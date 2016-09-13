window.onload = function () {
	var obox = document.getElementById("box");
	var opicScroll = obox.getElementsByTagName("div")[0];
	// console.log(opicScroll);
	var oleft = document.getElementById("left");
	var oright = document.getElementById("right");
	var oul = opicScroll.getElementsByTagName("ul")[0];
	var olis = oul.getElementsByTagName("li");
	var speed = 1;
	// console.log(oleft);
	oul.innerHTML += oul.innerHTML;
	oul.innerHTML += oul.innerHTML;
	oul.style.width = olis.length * olis[0].offsetWidth + "px";
	// console.log(oul.style.width);
	oul.style.left = (- oul.offsetWidth / 2) + "px";
	// console.log(oul.offsetWidth);
	function movePic() {
		if (oul.offsetLeft <= (- oul.offsetWidth / 2)) {
			oul.style.left = 0 + "px";
		}
		if (oul.offsetLeft > 0) {
			oul.style.left = (- oul.offsetWidth / 2) + "px";
		}
		oul.style.left = oul.offsetLeft + speed + "px";
	}
	var timer = setInterval(movePic, 30);

	oleft.onmouseenter = function () {
		speed = 1;
	};
	oright.onmouseenter = function () {
		speed = -1;
	};
	oul.onmouseover = function () {
		clearInterval(timer);
	}
	oul.onmouseout = function () {
		clearInterval(timer);
		timer = setInterval(movePic, 30);
	}
}