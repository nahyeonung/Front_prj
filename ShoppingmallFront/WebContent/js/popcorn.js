let particles = [];
const colors = ["black", "gray", "#2B2B55", "white"];
function pop () {
  for (let i = 0; i < 100; i++) {
    const p = document.createElement('particule');
    p.x = window.innerWidth * 0.5;
    p.y = window.innerHeight + (Math.random() * window.innerHeight * 0.3);
    p.vel = {
      x: (Math.random() - 0.5) * 10,
      y: Math.random() * -20 - 15
    };
    p.mass = Math.random() * 0.2 + 0.8;
    particles.push(p);
    p.style.transform = `translate(${p.x}px, ${p.y}px)`;
    const size = Math.random() * 50 + 5; 
    p.style.width = size + 'px';
    p.style.height = size + 'px';
	p.style.backgroundImage = "url('images/lvBag.webp')";
	p.style.backgroundSize = "100%";
    //p.style.background = colors[Math.floor(Math.random()*colors.length)];
	p.style.zIndex = 997;
    document.body.appendChild(p);
  }
}

function render () {
  for (let i = particles.length - 1; i--; i > -1) {
    const p = particles[i];
    p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;
    
    p.x += p.vel.x;
    p.y += p.vel.y;
    
    p.vel.y += (0.5 * p.mass);
    if (p.y > (window.innerHeight * 2)) {
      p.remove();
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(render);
}
 $(".paybtn").on('click', function(event){
 	pop();
	window.setTimeout(render, 300);
 })