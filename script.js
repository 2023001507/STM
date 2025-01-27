const lights = {
    north: document.querySelector('#north'),
    south: document.querySelector('#south'),
    east: document.querySelector('#east'),
    west: document.querySelector('#west'),
  };
  
  let currentPhase = 0;
  
  function updateTrafficLights() {
    // Reset all lights
    Object.values(lights).forEach(light => {
      light.querySelector('.red').classList.remove('active');
      light.querySelector('.yellow').classList.remove('active');
      light.querySelector('.green').classList.remove('active');
    });
  
    // Update lights based on the current phase
    switch (currentPhase) {
      case 0: // North-South green, East-West red
        lights.north.querySelector('.green').classList.add('active');
        lights.south.querySelector('.green').classList.add('active');
        lights.east.querySelector('.red').classList.add('active');
        lights.west.querySelector('.red').classList.add('active');
        break;
      case 1: // North-South yellow
        lights.north.querySelector('.yellow').classList.add('active');
        lights.south.querySelector('.yellow').classList.add('active');
        break;
      case 2: // East-West green, North-South red
        lights.north.querySelector('.red').classList.add('active');
        lights.south.querySelector('.red').classList.add('active');
        lights.east.querySelector('.green').classList.add('active');
        lights.west.querySelector('.green').classList.add('active');
        break;
      case 3: // East-West yellow
        lights.east.querySelector('.yellow').classList.add('active');
        lights.west.querySelector('.yellow').classList.add('active');
        break;
    }
  
    // Move to the next phase
    currentPhase = (currentPhase + 1) % 4;
  }
  
  // Update traffic lights every 3 seconds
  setInterval(updateTrafficLights, 3000);
  
  // Initialize traffic lights
  updateTrafficLights();