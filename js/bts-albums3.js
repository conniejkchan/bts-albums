const balloon = document.getElementById("yellow-balloon");

 // keyframe object
 let movement = [
    {top:'20px', left: '-80px'},
    {top: '-20px', left: '500px'}
  ];

  // timing object
  let balloonTiming = {duration: 2000, iterations: Infinity};

  //using Web Animations API
  let move = balloon.animate(
    movement,
    balloonTiming
  )
  function stopAnimation() {
    move.pause();
  }
  function startAnimation() {
    move.play();
  }

balloon.addEventListener('onmouseover',startAnimation)
balloon.addEventListener('onmouseout', stopAnimation);