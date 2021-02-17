// get our Element on the page. 
let video= document.querySelector('.viewer');
 let toggle = document.querySelector('.toggle');
 let progress = document.querySelector('.progress');
 let progressBar = document.querySelector('.progress__filled');
 let playerSlider = document.querySelectorAll('.player__slider');
 let skipButtons = document.querySelectorAll('[data-skip]');
let fullScreen = document.querySelector('.material-icons'); 
 
function togglePlay() {
  const method  = video.paused ? 'play' : 'pause';
  video[method]();  
}

function updatePlay(e) {
     let icon = this.paused ? "►" : "❚ ❚";
   toggle.textContent = icon;
    }

 function handleSkip() {
      video.currentTime += parseFloat(this.dataset.skip); 
      video.play();
 }
 
 function changeSliderValue(e) {
  video[this.name] = this.value;


 }
 function handleScrollBar(e) {
    let basis = (this.currentTime /this.duration)*100;
    progressBar.style.flexBasis = `${basis}%`
  
 }

 function updateDuration(e) {
   console.log(e);
    let offset = e.offsetX;
    let offsetWidth = e.target.offsetWidth;
    //offset gives the co-ordinate in a particular box. 
     //here offsetX= x-coordinate in x-axis. 
  //  console.log(offset,offsetWidth);
  console.log(video.duration);
  let scrubTime = offset/632 * video.duration;
  console.log(scrubTime);
  video.currentTime = scrubTime;
   
    }
 
    // function increaseSize() {
    //    console.log(video.videoHeight);
    //    console.log(video.videoWidth);
    //   //  console.dir(video);
    //   video.videoHeight = window.innerHeight;
    //   video.videoWidth = window.innerWidth;
    // }

toggle.addEventListener('click' ,togglePlay);
 console.log(video);
video.addEventListener('click' ,togglePlay);
video.addEventListener('play' ,updatePlay);
video.addEventListener('pause' ,updatePlay);


skipButtons.forEach(skipVideo => {
    skipVideo.addEventListener('click',handleSkip)
})
playerSlider.forEach(slider =>{
  slider.addEventListener('input', changeSliderValue)
})
video.addEventListener('timeupdate', handleScrollBar )

let increaseTime = false;
progress.addEventListener('click',updateDuration)
progress.addEventListener('mousemove',() => {
   if(increaseTime){
    updateDuration;
   }
})
progress.addEventListener('mousedown', () => increaseTime = true)
progress.addEventListener('mouseup', () => increaseTime = false)

// fullScreen.addEventListener('click', increaseSize)