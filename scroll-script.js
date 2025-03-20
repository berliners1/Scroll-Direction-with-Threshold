let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething() {
  // Do something with the scroll position
  const nextScrollPosition = window.scrollY;
  
  if(lastKnownScrollPosition > nextScrollPosition){
    console.log('up');
  } else {
    console.log('down');
  }
  
  lastKnownScrollPosition = nextScrollPosition;
}

document.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething();
      ticking = false;
    });

    ticking = true;
  }
});