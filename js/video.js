var video
video = document.querySelector(".video")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	// the play button
	document.querySelector("#play").addEventListener("click", function() {
		//console.log("Play Video");
		video.play();
		// change the volume info
		document.querySelector("#volume").innerText = video.volume * 100 + "%"
	});

	// the pause button
	document.querySelector("#pause").addEventListener("click",function(){
		// console.log("Pause Video");
		video.pause();
	})

	var originRate = video.playbackRate
	// the slow down button
	document.querySelector("#slower").addEventListener("click",function(){
		video.playbackRate -= 0.1 * originRate;
		console.log("The play rate is " + video.playbackRate * 100 + "%");
	})

	// the speed up button
	document.querySelector("#faster").addEventListener("click",function(){
		video.playbackRate += 0.1 * originRate;
		console.log("The play rate is " + video.playbackRate * 100 + "%");
	})

	// skip ahead button
	document.querySelector("#skip").addEventListener("click",function(){
		if (video.currentTime <= video.duration - 10){
			video.currentTime += 10;
		}
		else{
			video.currentTime = 0;
		}
		console.log("Current Time is " + video.currentTime + "s");
	})

	// mute button
	document.querySelector("#mute").addEventListener("click",function(){
		video.muted = !video.muted;
		// Change volume information
		if (video.muted) {
			document.querySelector("#volume").innerText = "0%"
		} else {
			document.querySelector("#volume").innerText = video.volume * 100 + "%"
		}
	})

	// Slider
	var slider = document.querySelector("#slider");
	slider.addEventListener("input",function(){
		video.volume = slider.value / 100;
		document.querySelector("#volume").innerText = volume * 100 + "%"
	})

	// Old School
	document.querySelector("#vintage").addEventListener("click",function(){
		video.classList.add('oldSchool');
	})
	
	// Remove
	document.querySelector("#orig").addEventListener("click",function(){
		video.classList.remove('oldSchool');
	})
});

// document.querySelector("#play").addEventListe ner("click", function() {
// 	console.log("Play Video");
// });

