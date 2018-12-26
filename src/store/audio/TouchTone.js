export default class TouchTone {

    constructor() {
        // Get the audio context
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    }

    init() {

        // Create, amplify, and connect row oscillator
        this.rowOscillator = this.context.createOscillator();
        this.rowOscillator.type = 'sine';
        this.rowGain = this.context.createGain();
        this.rowOscillator.connect(this.rowGain);
        this.rowGain.connect(this.context.destination);

        // Create, amplify, and connect column oscillator
        this.colOscillator = this.context.createOscillator();
        this.colOscillator.type = 'sine';
        this.colGain= this.context.createGain();
        this.colOscillator.connect(this.colGain);
        this.colGain.connect(this.context.destination);

    }

    play(tones) {

        // initialize
        this.init();

        // Get the current time from the audio context
        const time = this.context.currentTime;

        // Load tones into oscillators
        this.rowOscillator.frequency.value = tones[0];
        this.colOscillator.frequency.value = tones[1];

        // Set gain and start oscillators
        this.rowGain.gain.setValueAtTime(1, time);
        this.colGain.gain.setValueAtTime(1, time);
        this.rowOscillator.start(time);
        this.colOscillator.start(time);

        // Set the stop time
        this.stop(time + .5);

    }

    stop(time) {

        // Ramp down gain and stop oscillators
        this.rowGain.gain.setValueAtTime(0, time);
        this.colGain.gain.setValueAtTime(0, time);
        this.rowOscillator.stop(time);
        this.colOscillator.stop(time);
    }

}