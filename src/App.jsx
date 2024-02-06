import { Experience, About, Title, SocialMedia, Nav} from "./components";
import Particles from "@tsparticles/react";

const particlesOptions = {
  particles: {
    number: {
      value: 50, // Number of particles
      density: {
        enable: true,
        value_area: 800 // Area in which particles are distributed
      }
    },
    color: {
      value: "#ffffff" // Color of particles
    },
    shape: {
      type: "circle", // Shape of particles
    },
    opacity: {
      value: 0.5, // Opacity of particles
      random: false,
    },
    size: {
      value: 3, // Size of particles
      random: true, // Randomize size
    },
    line_linked: {
      enable: true,
      distance: 150, // Distance between linked particles
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6, // Speed of particle movement
      direction: "none", // Direction of particle movement
      random: false,
      straight: false,
      out_mode: "out", // How particles exit the canvas
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // Particle effect on hover
      },
      onclick: {
        enable: true,
        mode: "push" // Particle effect on click
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true // Adjusts for retina displays
};

const App = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <div className="relative bg-black-gradient mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Particles 
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10">
        <div className={`lg:flex lg:justify-between lg:gap-4`}>
          <div className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:justify-between lg:flex-col lg:py-24`}>
            <div>
              <Title />
              <Nav />
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
          <div className={'lg:w-1/2'}>
            <About />
            <Experience/>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default App;