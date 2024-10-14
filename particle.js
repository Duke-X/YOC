particlesJS("particles-js", {
    particles: {
      number: {
        value: 450, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#000", // Color of the particles
      },
      shape: {
        type: "circle", // Shape of the particles
      },
      opacity: {
        value: 7, // Opacity of particles
        random: false,
      },
      size: {
        value: 4,
        random: true,
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window", // Changed from "canvas" to "window"
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // Distance from the cursor where particles repulse
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });