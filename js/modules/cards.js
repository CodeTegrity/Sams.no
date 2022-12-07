export default function() {
		 
	// Targeting video element 
	 let clip = document.querySelector('.video')
	 
	 /* Applying mouseover event on video clip 
	 and then we call play() function to play 
	 the video when the mouse is over the video */
	 clip.addEventListener("mouseover", function (event) {
	  clip.play();
  })
  
  /* Applying mouseout event on video clip 
  and then we call pause() function to stop 
  the video when the mouse is out the video */
  clip.addEventListener("mouseout", function (event) {
	  clip.pause();
  })


	 // Targeting video element 
	 let clip2 = document.querySelector('.second-video')
	 
	 /* Applying mouseover event on video clip 
	 and then we call play() function to play 
	 the video when the mouse is over the video */
	 clip2.addEventListener("mouseover", function (e) {
	  clip2.play();
  })
  
  /* Applying mouseout event on video clip 
  and then we call pause() function to stop 
  the video when the mouse is out the video */
  clip2.addEventListener("mouseout", function (e) {
	  clip2.pause();
  })
};