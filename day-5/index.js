let panel = document.querySelectorAll('.panel');

  function toggleOpen(){
      console.log(this);
     this.classList.toggle('open');

  }
function toggleActive(e) {
    console.log(e.propertyName);
}

panel.forEach(panel =>{
     panel.addEventListener('click',toggleOpen)
})
panel.forEach(panel =>{
     panel.addEventListener('transitionend',toggleActive)
})
