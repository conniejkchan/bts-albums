/* Album 1: HYYH Young Forever */
const airplane = document.getElementById("airplane");

 // keyframe object
 let movement = [
    {top: '200px', left: '200px'},
    {top: '50px', left: '910px'}
  ];

  // timing object
  let airplaneTiming = {duration: 3000, iterations: Infinity};

  //using Web Animations API
  let move = airplane.animate(
    movement,
    airplaneTiming
  )
  function stopAnimation() {
    move.pause();
  }
  function startAnimation() {
    move.play();
  }

airplane.addEventListener('onmouseover',startAnimation)
airplane.addEventListener('onmouseout', stopAnimation);

const balloon = document.getElementById("balloon");

 // keyframe object
 let movement2 = [
    {bottom: '50px', left: '10px'},
    {bottom: '500px', left: '10px'}
  ];

  // timing object
  let balloonTiming = {duration: 3000, iterations: Infinity};

  //using Web Animations API
  let move2 = balloon.animate(
    movement2,
    balloonTiming
  )
  function stopAnimation() {
    move2.pause();
  }
  function startAnimation() {
    move2.play();
  }

  balloon.addEventListener('onmouseover',startAnimation)

  balloon.addEventListener('onmouseout', stopAnimation);

  const balloon2 = document.getElementById("balloon2");

 // keyframe object
 let movement3 = [
    {bottom: '50px', right: '10px'},
    {bottom: '500px', right: '10px'}
  ];

  // timing object
  let balloonTiming2 = {duration: 3000, iterations: Infinity};

  //using Web Animations API
  let move3 = balloon2.animate(
    movement3,
    balloonTiming2
  )
  function stopAnimation() {
    move3.pause();
  }
  function startAnimation() {
    move3.play();
  }

  balloon2.addEventListener('onmouseover',startAnimation)

  balloon2.addEventListener('onmouseout', stopAnimation);