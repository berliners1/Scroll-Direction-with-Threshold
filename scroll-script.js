let lastKnownScrollPosition = 0;
let ticking = false;
let thresholdCounterUp = 0; 
let thresholdCounterDown = 0;
let threshold = 10; //amt of pixels of scrolling before an up or down will be detected.

function doSomething() {
  // Do something with the scroll position
  const nextScrollPosition = window.scrollY;
  
  //So we can do an if/else to detect up or down, and add a thresholdCounter in each condition to account for matching a scroll threshold in either direction.
  if(lastKnownScrollPosition > nextScrollPosition){
    thresholdCounterUp++
    console.log('up ' + thresholdCounterUp);
    if(thresholdCounterUp === threshold){
        console.log('DETECT UP');
    }
  } else {
    thresholdCounterDown++
    console.log('down ' + thresholdCounterDown);
    if(thresholdCounterDown === threshold){
        console.log('DETECT DOWN');
    }
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

    //reset when reach threshold amount.
    if(thresholdCounterUp > threshold || thresholdCounterDown > threshold){
        thresholdCounterUp = 0;
        thresholdCounterDown = 0;
    }
  }
});