particlesJS("particles-js", {
   "particles": {
      "number": {
         "value": 180,
         "density": {
         "enable": true,
         "value_area": 800
      }
   },
   "color": {
      "value": "#ff6e00"
   },
   "shape": {
      "type": "circle",
      "stroke": {
         "width": 0,
         "color": "#000000"
      },
      "polygon": {
         "nb_sides": 5
      },
      "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
      }
   },
   "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
      }
   },
   "size": {
      "value": 3,
      "random": true,
      "anim": {
         "enable": false,
         "speed": 30,
         "size_min": 0.1,
         "sync": false
      }
   },
   "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff6e00",
      "opacity": 0.4,
      "width": 1
   },
   "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
      }
   }
},
"interactivity": {
   "detect_on": "canvas",
   "events": {
      "onhover": {
         "enable": true,
         "mode": "grab"
      },
      "onclick": {
         "enable": true,
         "mode": "push"
      },
      "resize": true
   },
   "modes": {
      "grab": {
         "distance": 140,
         "line_linked": {
            "opacity": 1
         }
      },
      "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 1
      },
      "repulse": {
         "distance": 200,
         "duration": 0.4
      },
      "push": {
         "particles_nb": 4
      },
      "remove": {
         "particles_nb": 2
      }
   }
},
"retina_detect": true
});

const newYork = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>222 Broadway,
            New York, NY 10038,</h6>
           <h5 class="fw-bold">United States of America</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const london = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>2nd Floor, Berkeley Square House,
            Berkeley Square, London W1J 6BD,</h6>
           <h5 class="fw-bold">United Kingdom</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const paris = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>28 rue de l’Amiral Hamelin,
            Paris, 75116,</h6>
           <h5 class="fw-bold">France</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const dubai = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>Unit 303, South Block,
            Emirates Financial Tower,DIFC,</h6>
           <h5 class="fw-bold">Dubai, UAE</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const gurugram = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>One Horizon Center, DLF Phase V,
            Golf Course Road, Sector 43,</h6>
           <h5 class="fw-bold">Gurugram, India</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const mumbai = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>7th Floor, North Annex, Tower 2A,
            One World Centre,
            Senapati Bapat Marg, Lower Parel,</h6>
           <h5 class="fw-bold">Mumbai, India</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const jammu = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>6, Jeevan Bhawan,
            1st Floor, Narwal</h6>
           <h5 class="fw-bold">Jammu, India</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const singapore = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>1 Fullerton Road,
            #02-01 One Fullerton,</h6>
           <h5 class="fw-bold">Singapore</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}

const hongKong = () =>{
   document.getElementById("contact-details").innerHTML = `<div class="list-group shadow-sm h-75">
   <div class="list-group-item list-group-item-action h-100">
       <div class="text-center">
           <div><i class="bi bi-building text-primary fs-1"></i></div>
           <h5 class="text-secondary fw-bold mb-3">MEET US</h5>
           <h6>2003, 20/F Tower 5,
            China Hong Kong City,</h6>
           <h5 class="fw-bold">33, Canton Road Tsim Sha Tsui Kowloon</h5>
           <a class="text-decoration-none fw-500" href="#">info@positivemoves.com</a>
       </div>
   </div>
</div>`;
}