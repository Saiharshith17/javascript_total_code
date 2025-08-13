class Light{

  
    constructor(location){
        this.location=location;
    }

    on(){
        console.log(`Light at ${location} is turned on`);
    }
    Off(){
        console.log(`Light at ${location} is turned off`);
    }
}



class Stereo {
  on() {
    console.log('Stereo is on');
  }

  off() {
    console.log('Stereo is off');
  }

  setMode(mode) {
    console.log(`Mode is set to ${mode}`);
  }

  setVolume(level) {
    console.log(`Volume is set to ${level}`);
  }
}