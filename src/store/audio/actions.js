// Audio related actions
export const PLAY_DTMF_PAIR = 'audio/play-dtmf';

// Play a DTMF tone pair
export const playDTMFPair = tones => {
    return {
        type: PLAY_DTMF_PAIR,
        tones
    };
};
