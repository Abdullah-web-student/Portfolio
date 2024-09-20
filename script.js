document.addEventListener('DOMContentLoaded', function () {
    const servicesSection = document.querySelector('.container-services');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add('visible');
                observer.unobserve(servicesSection); // Stop observing once animation is triggered
            }
        });
    });

    observer.observe(servicesSection);
});


window.addEventListener('scroll', function () {
    const projectsSection = document.querySelector('.container3');
    const projectsPosition = projectsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (projectsPosition < screenPosition) {
        const projectCards = document.querySelectorAll('.project');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200); // Adding a delay for each card
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section1, .edu, .exp');
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});





window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    // const sticky = header.offsetTop;

    if (window.pageYOffset > 200) {
        console.log('yes....')
        header.classList.add('sticky');

    } else {
        console.log('no....')
        header.classList.remove('sticky');
    }
})


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circlesa");

const colors = [
    "#00b8ff",
    "#00aef0",
    "#00a5e0",
    "#009cd1",
    "#0093c2",
    "#008ab3",
    "#0081a4",
    "#007895",
    "#006f87",
    "#006678",
    "#005d6a",
    "#00545c",
    "#004c4f",
    "#004342",
    "#003b36",
    "#003329",
    "#002b1d",
    "#002311",
    "#001b06",
    "#001305",
    "#000d04",
    "#000603"
  ];
  
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
